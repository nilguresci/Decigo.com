const express = require("express");
const { decideReport } = require("../controllers/admin");

const router = express.Router();

router.route("/decidereport").post(/*protect,*/ decideReport);

module.exports = router;
