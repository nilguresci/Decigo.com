const express = require("express");
const { login, refreshToken } = require("../controllers/auth");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/login").post(login);
router.route("/refreshtoken").post(protect, refreshToken);

module.exports = router;
