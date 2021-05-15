const mongoose = require("mongoose");
const Option = require("./Option");

const SurveySchema = new mongoose.Schema({
  UserId: {
    type: String,
    required: [true, "Please provide user id"],
  },
  Question: {
    type: String,
    required: [true, "Please provide question"],
    minLength: [3, "Please enter a valid question with more than 3 letters"],
  },
  CreationDate: {
    type: Date,
    default: Date.now,
  },
  Time: {
    type: Number,
    default: 5000,
  },
  Options: {
    type: [Option],
    required: [true, "Please provide options"],
    minLength: [2, "Please provide options more than 1"],
  },
  Category: {
    type: String,
    required: [true, "Please provide category"],
  },
  SuggestionNum: {
    type: Number,
    default: 0,
  },
});

const Survey = mongoose.model("Surver", SurveySchema);

module.exports = Survey;
