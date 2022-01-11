const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  if (err.code === 11000) {
    const message = `Aynı değer birden fazla kez girildi`;
    error = new ErrorResponse(message, 400);
  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  console.log(error.message);

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Sunucu Hatası",
  });
};

module.exports = errorHandler;
