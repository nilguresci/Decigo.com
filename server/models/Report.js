const mongoose = require("mongoose");
const ReportUser = require("./ReportUser");

const ReportSchema = new mongoose.Schema({
  SurveyId: {
    type: String,
    required: [true, "Anket idsi tanımlı değil"],
  },
  CreationDate: {
    type: Date,
    default: Date.now,
  },
});

const Report = mongoose.model("Report", ReportSchema);

module.exports = Report;
