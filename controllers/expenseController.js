const User = require("../models/User");
const Expense = require("../models/Expense");
const xlsx = require("xlsx");
const { GoogleGenAI } = require("@google/genai");
//Add Expense Source
exports.addExpense = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, category, amount, date, paidVia } = req.body;

    // Validation
    if (!category || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newExpense = new Expense({
      userId,
      icon,
      category,
      amount,
      date: new Date(date),
      paidVia,
    });

    await newExpense.save();

    res.status(200).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
// Get All Expense Sources
exports.getAllExpense = async (req, res) => {
  const userId = req.user.id;

  try {
    const expense = await Expense.find({ userId }).sort({ date: -1 });
    res.json(expense);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
// Delete Expense Source
exports.deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.parseTransaction = async (req, res) => {
  const { text } = req.body;
  if (!text?.trim()) return res.status(400).json({ message: "text is required" });

  try {
    const ai    = new GoogleGenAI({});
    const today = new Date().toISOString().split("T")[0];

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Today's date is ${today}.

Parse this expense transaction description into structured JSON:
"${text}"

Return ONLY a valid JSON object with exactly these fields:
{
  "icon": "<a single emoji that best represents the expense category>",
  "category": "<title-case name, e.g. Food, Groceries, Travel, Rent, Entertainment, Healthcare, Shopping, Utilities, Transport>",
  "amount": <number, no currency symbol>,
  "paidVia": "<exactly one of: Cash | UPI | Credit Card | Debit Card>",
  "date": "<YYYY-MM-DD, resolve relative dates like yesterday/today/last Monday using today=${today}>"
}

Rules:
- icon must be a single emoji character relevant to the category (e.g. 🍕 for Food, 🚗 for Transport, 🏠 for Rent).
- If payment method is not mentioned, default to "UPI".
- If date is not mentioned, use today (${today}).
- amount must be a number, not a string.
- Return ONLY the JSON. No markdown, no explanation.`,
    });

    const raw     = response.text.trim();
    const cleaned = raw.replace(/^```json?\s*/i, "").replace(/\s*```$/, "").trim();
    const parsed  = JSON.parse(cleaned);

    if (!parsed.category || !parsed.amount || !parsed.paidVia || !parsed.date) {
      return res.status(422).json({ message: "Could not extract all required fields from that text." });
    }

    res.json(parsed);
  } catch (error) {
    res.status(500).json({ message: "Failed to parse transaction", error: error.message });
  }
};

exports.suggestCategory = async (req, res) => {
  const { icon } = req.body;
  if (!icon) {
    return res.status(400).json({ message: "icon is required" });
  }

  try {
    const ai = new GoogleGenAI({});

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Given the emoji "${icon}", reply with a single expense category name (2-3 words max, title case). Examples: Food, Rent, Travel, Groceries, Entertainment, Healthcare, Shopping, Utilities. Reply with only the category name, nothing else.`,
    });

    const category = response.text.trim();
    res.json({ category });
  } catch (error) {
    res.status(500).json({ message: "Failed to suggest category", error: error.message });
  }
};

exports.downloadExpenseExcel = async (req, res) => {
  const userId = req.user.id;

  try {
    const expense = await Expense.find({ userId }).sort({ date: -1 });

    // Prepare data for Excel
    const data = expense.map((item) => ({
      Category: item.category,
      Amount: item.amount,
      Date: new Date(item.date).toLocaleDateString(),
      "Paid Via": item.paidVia,
      Icon: item.icon || "N/A",
    }));

    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Expense");

    // Generate buffer instead of writing to file
    const buffer = xlsx.write(wb, { bookType: "xlsx", type: "buffer" });

    // Set headers for file download
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=expense_details.xlsx"
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Length", buffer.length);

    // Send the buffer
    res.send(buffer);
  } catch (error) {
    console.error("Download error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
