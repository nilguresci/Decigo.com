// const jwt = require("jsonwebtoken");

// const Admin = require("../models/Admin");
const Report = require("../models/Report");
const Survey = require("../models/Survey");
// const { report } = require("../routes/admin");
// const ErrorResponse = require("../utils/errorResponse");

// exports.register = async (req, res, next) => {
//   const { Firstname, Lastname, Username, City, Email, Password } = req.body;

//   try {
//     const admin = await Admin.create({
//       Firstname,
//       Lastname,
//       Username,
//       Email,
//       Password,
//     });

//     sendToken(admin, 200, res);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.login = async (req, res, next) => {
//   const { Username, Password } = req.body;

//   if (!Username || !Password)
//     return next(
//       new ErrorResponse("Please provide an username and password", 400)
//     );

//   try {
//     const admin = await Admin.findOne({ Username }).select("+Password");
//     if (!admin) return next(new ErrorResponse("Invalid credentials", 401));

//     const isMatch = await admin.matchPassword(Password);
//     if (!isMatch) return next(new ErrorResponse("Invalid credentials", 401));

//     sendToken(admin, 200, res);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.refreshToken = async (req, res, next) => {
//   const token = await jwt.sign(
//     { id: req.body.Userid },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: process.env.JWT_EXPIRE,
//     }
//   );
//   res.status(200).json({ success: true, token });
// };

// exports.getReports = async (req, res, next) => {
//   try {
//     const reports = await Report.find();

//     if (reports.length === 0)
//       return next(
//         new ErrorResponse(`There are currently no report to show`, 400)
//       );

//     res.status(200).json({
//       success: true,
//       data: reports,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

exports.decideReport = async (req, res, next) => {
  try {
    const { decide, SurveyId, ReportId } = req.body;

    if (decide) {
      await Survey.deleteOne({ _id: SurveyId });
      await Report.deleteOne({ _id: ReportId });
      res.status(200).json({
        success: true,
        message: `Anket yayından kaldırıldı.`,
        data: SurveyId,
      });
    } else {
      await Report.deleteOne({ _id: ReportId });
      res.status(200).json({
        success: true,
        message: `Rapor silindi.`,
        data: ReportId,
      });
    }
  } catch (error) {
    next(error);
  }
};

// const sendToken = (admin, statusCode, res) => {
//   const token = admin.getSignedJwtToken();
//   res
//     .status(statusCode)
//     .json({ success: true, token, Username: user.Username, userid: user._id });
// };
