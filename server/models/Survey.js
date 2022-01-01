const mongoose = require("mongoose");
const Option = require("./Option").schema;

const SurveySchema = new mongoose.Schema({
  UserId: {
    type: String,
    required: [true, "Lütfen giriş yapmış olduğunuzdan emin olunuz"],
  },
  Question: {
    type: String,
    required: [true, "Lütfen anket sorusunu giriniz"],
    minLength: [
      3,
      "Lütfen anket sorusunun üç harften fazla olduğundan emin olunuz",
    ],
    maxLength: [120, "120 karakteri aşamazsınız."],
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
    required: [true, "Lütfen anket seçeneği giriniz"],
    minLength: [2, "Lütfen en az iki anket seçeneği girdiğinizden emin olunuz"],
    maxLength: [5, "Beşden fazla cevap oluşturulamaz."],
  },
  Category: {
    type: String,
    required: [true, "Lütfen anket kategorisini belirtiniz"],
  },
  SuggestionNum: {
    type: Number,
    default: 0,
  },
});

const Survey = mongoose.model("Survey", SurveySchema);

module.exports = Survey;
