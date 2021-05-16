const express = require("express");
const { protect } = require("../middleware/auth");
const {
  getMySurveys,
  getOneSurvey,
  updateSurvey,
  deleteSurvey,
} = require("../controllers/profile");

const router = express.Router();

router.route("/mySurveys").get(protect, getMySurveys);
router.route("/mySurveys/:id").get(protect, getOneSurvey);
router.route("/mySurveys/:id").put(protect, updateSurvey);
router.route("/mySurveys/:id").delete(protect, deleteSurvey);

module.exports = router;
