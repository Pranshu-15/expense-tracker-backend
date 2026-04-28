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
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
      req.file.filename
    }`;
    res.status(200).json({ imageUrl });
  });
});
module.exports = router;
