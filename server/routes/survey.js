const express = require("express");
const { protect } = require("../middleware/auth");
const {
  addSurvey,
  getSurveys,
  getOneSurvey,
  joinSurvey,
  getUsers,
  addReport,
} = require("../controllers/survey");

const router = express.Router();

router.route("/").get(getSurveys);
router.route("/users").get(getUsers);
router.route("/report").post(/*protect, */ addReport);
router.route("/").post(/*protect, */ addSurvey); //şu anda giriş işlemi yapılmadığından authenticaondan kurtulmak için buraları yorum satırına aldım şimdilik.
router.route("/getSurvey/:id").get(protect, getOneSurvey);
router.route("/").patch(/*protect ,*/ joinSurvey);

module.exports = router;
