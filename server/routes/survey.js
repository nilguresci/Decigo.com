const express = require("express");
const { protect } = require("../middleware/auth");
const {
  addSurvey,
  getSurveys,
  getOneSurvey,
  joinSurvey,
  getUsers,
} = require("../controllers/survey");

const router = express.Router();

router.route("/").get(getSurveys);
router.route("/users").get(getUsers);
router.route("/").post(/*protect, */ addSurvey); //şu anda giriş işlemi yapılmadığından authenticaondan kurtulmak için buraları yorum satırına aldım şimdilik.
router.route("/:id").get(protect, getOneSurvey);
router.route("/").patch(/*protect ,*/ joinSurvey);

module.exports = router;
