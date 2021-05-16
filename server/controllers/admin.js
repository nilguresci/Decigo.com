const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");
const ErrorResponse = require("../utils/errorResponse");

exports.register = async (req, res, next) => {
  const { Firstname, Lastname, Username, City, Email, Password } = req.body;

  try {
    const admin = await Admin.create({
      Firstname,
      Lastname,
      Username,
      Email,
      Password,
    });

    sendToken(admin, 200, res);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const { Username, Password } = req.body;

  if (!Username || !Password)
    return next(
      new ErrorResponse("Please provide an username and password", 400)
    );

  try {
    const admin = await Admin.findOne({ Username }).select("+Password");
    if (!admin) return next(new ErrorResponse("Invalid credentials", 401));

    const isMatch = await admin.matchPassword(Password);
    if (!isMatch) return next(new ErrorResponse("Invalid credentials", 401));

    sendToken(admin, 200, res);
  } catch (err) {
    next(err);
  }
};

exports.refreshToken = async (req, res, next) => {
  const token = await jwt.sign(
    { id: req.body.Userid },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
  res.status(200).json({ success: true, token });
};

const sendToken = (admin, statusCode, res) => {
  const token = admin.getSignedJwtToken();
  res
    .status(statusCode)
    .json({ sucess: true, token, Username: user.Username, userid: user._id });
};
