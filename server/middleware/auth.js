const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  )
    token = req.headers.authorization.split(" ")[1];

  if (!token) return next(new ErrorResponse("Otum açılmamış", 401));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) return next(new ErrorResponse("Bu kullanıcı silinmiş", 404));

    req.user = user;

    next();
  } catch (err) {
    return next(new ErrorResponse("Otum açılmamış veya süresi dolmuş", 401));
  }
};
