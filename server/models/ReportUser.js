const mongoose = require("mongoose");

const ReportUserSchema = new mongoose.Schema({
  UserId: {
    type: String,
    required: [true, "Please provide user id"],
  },
  Reason: {
    type: String,
    required: [true, "Please provide reason"],
    minLength: [
      15,
      "Please provide a valid reason that more than 15 characters",
    ],
    maxLength: [
      100,
      "Please provide a valid reason that less than 100 characters",
    ],
  },
});
