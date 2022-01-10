const express = require("express");
const { protect } = require("../middleware/auth");
const {
  addSurvey,
  getSurveys,
  getOneSurvey,
  joinSurvey,
  getUsers,
  addReport,
  getReportedSurveys,
  getSurveyByCategory,
} = require("../controllers/survey");

const router = express.Router();

router.route("/").get(getSurveys);
router.route("/category/:category").get(getSurveyByCategory);
router.route("/users").get(getUsers);
router.route("/report").post(protect, addReport);
router.route("/").post(protect, addSurvey); //şu anda giriş işlemi yapılmadığından authenticaondan kurtulmak için buraları yorum satırına aldım şimdilik.
router.route("/getSurvey/:id").get(protect, getOneSurvey);
router.route("/getReporteds").get(protect, getReportedSurveys);
router.route("/").patch(protect, joinSurvey);

module.exports = router;
