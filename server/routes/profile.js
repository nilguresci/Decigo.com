const express = require("express");
const { protect } = require("../middleware/auth");
const {
  getMySurveys,
  updateSurvey,
  deleteSurvey,
  getMyUserInfo,
  updateUser,
  changePassword,
} = require("../controllers/profile");

const router = express.Router();

router.route("/mySurveys/:id").get(protect, getMySurveys);
//router.route("/mySurveys/:id").get(protect, getOneSurvey);
router.route("/mySurveys/:id").put(/*protect,*/ updateSurvey);
router.route("/mySurveys/:id").delete(/*protect, */ deleteSurvey);
router.route("/:id").get(getMyUserInfo);
router.route("/update/:id").put(updateUser);
router.route("/changePass/:id").put(changePassword);

module.exports = router;
