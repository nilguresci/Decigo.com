const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Survey = require("../models/Survey");
const User = require("../models/User");
const Report = require("../models/Report");
const ErrorResponse = require("../utils/errorResponse");

exports.getMySurveys = async (req, res, next) => {
  const userId = req.params.id;

  if (!userId) return next(new ErrorResponse("User id not found!", 400));

  try {
    const mySurveys = await Survey.find({ UserId: userId });
    if (mySurveys.length === 0 || !mySurveys) {
      return next(
        new ErrorResponse(`There are currently no survey to show`, 400)
      );
    }

    res.status(200).json({
      success: true,
      data: mySurveys,
    });
  } catch (error) {
    next(error);
  }
};

// exports.getOneSurvey = async (req, res, next) => {
//   const { id } = req.body;

//   if (!id) return next(new ErrorResponse("Poll id not found!", 400));

//   try {
//     res.status(200);
//   } catch (error) {
//     next(error);
//   }
// };

exports.updateSurvey = async (req, res, next) => {
  //time güncellenebilecek sadece
  const { time } = req.body;
  try {
    const survey = await Survey.updateOne(
      { _id: req.params.id },
      { $set: { Time: time } }
    );
    res.status(200).json({
      success: true,
      data: survey,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSurvey = async (req, res, next) => {
  try {
    const deletedSurvey = await Survey.findByIdAndDelete(req.params.id);
    try {
      await Report.deleteOne({ SurveyId: req.params.id });
    } catch (err) {
      console.log(err);
    }
    res.status(200).json({
      success: true,
      data: deletedSurvey,
    });
  } catch (error) {
    next(error);
  }
};

exports.getMyUserInfo = async (req, res, next) => {
  try {
    const myInfo = await User.findById(req.params.id);
    if (!myInfo)
      return next(
        new ErrorResponse(`${req.params.id} id'li kullanıcı bulunamadı.`, 400)
      );

    res.status(200).json({
      success: true,
      data: myInfo,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  //fullname,email,username,avatar güncellenebilecek.
  const { fullname, email, username, avatarno } = req.body;
  console.log("gelen avatar no", avatarno);
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          Fullname: fullname,
          Email: email,
          Username: username,
          AvatarNo: avatarno,
        },
      }
    );
    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

exports.changePassword = async (req, res, next) => {
  const { Password, newPassword } = req.body;
  try {
    const user = await User.findById({ _id: req.params.id }).select(
      "+Password"
    );

    if (!user) {
      return next(new ErrorResponse("Kullanıcı bulunamadı.", 401));
    }
    const isMatch = await user.matchPassword(Password);
    if (!isMatch) {
      return next(new ErrorResponse("Şifreniz doğru değil.", 401));
    } else {
      const salt = await bcrypt.genSalt(10);
      const pass = await bcrypt.hash(newPassword, salt);
      const changedPassword = await User.updateOne(
        { _id: req.params.id },
        { $set: { Password: pass } }
      );
      res.status(200).json({
        success: true,
        data: changedPassword,
      });
    }
  } catch (error) {
    next(error);
  }
};
