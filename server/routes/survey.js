const express = require("express");
const { protect } = require("../middleware/auth");
const {
  addSurvey,
  getSurveys,
  getOneSurvey,
  joinSurvey,
} = require("../controllers/survey");

const router = express.Router();

router.route("/").get(getSurveys);
router.route("/").post(protect, addSurvey);
router.route("/:id").get(getOneSurvey);

//ankete katılınca birileri anket güncellenecek
router.route("/").patch(protect, joinSurvey);

module.exports = router;
