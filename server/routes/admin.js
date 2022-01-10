const express = require("express");
const { decideReport } = require("../controllers/admin");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/decidereport").post(protect, decideReport);

module.exports = router;
