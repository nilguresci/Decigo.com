const express = require("express");
const { decideReport } = require("../controllers/admin");

const router = express.Router();

//router.route("/login").post(login);
//router.route("/refreshtoken").post(protect, refreshToken);
//router.route("/reports").get(protect, getReports);
router.route("/decidereport").post(/*protect,*/ decideReport);

module.exports = router;
