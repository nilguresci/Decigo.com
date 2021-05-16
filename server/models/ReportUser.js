const mongoose = require("mongoose");

const ReportUserSchema = new mongoose.Schema({
  UserId: {
    type: String,
    required: [true, "Please provide user id"],
  },
  Reason: {
    type: String,
    required: [true, "Please provide reason"],
    minLength: 15,
    maxLength: 100,
  },
});
