const express = require("express");

const { protect } = require("../middleware/authMiddleware");

const { getDashboardData, getSpendingInsights } = require("../controllers/dashboardController");

const router = express.Router();

router.get("/", protect, getDashboardData);
router.get("/insights", protect, getSpendingInsights);

module.exports = router;
