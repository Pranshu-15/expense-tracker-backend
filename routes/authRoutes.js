const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  getUserInfo,
  getSecurityQuestion,
  resetPasswordWithSecurity,
} = require("../controllers/authController");
const uplaod = require("../middleware/uploadMiddleware");

const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);

// Forgot password (security question based)
router.post("/forgot-password/question", getSecurityQuestion);
router.post("/forgot-password/reset", resetPasswordWithSecurity);

router.post("/upload-image", (req, res) => {
  uplaod.single("image")(req, res, function (err) {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    // Convert to Base64 to survive Render ephemeral storage
    const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
    res.status(200).json({ imageUrl: base64Image });
  });
});
module.exports = router;
