const express = require("express");
const {
  protect,
  login,
  refreshToken,
  getReports,
  decideReport,
} = require("../middleware/admin");

const router = express.Router();

router.route("/login").post(login);
router.route("/refreshtoken").post(protect, refreshToken);
router.route("/reports").get(protect, getReports);
router.route("/decidereport").get(protect, decideReport);

module.exports = router;
