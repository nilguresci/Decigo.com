const mongoose = require("mongoose");
const Participant = require("./Participant");

const OptionSchema = new mongoose.Schema({
  Text: {
    type: String,
    required: [true, "Please provide text of the option"],
  },
  Participants: {
    type: [Participant],
  },
  Suggestion: {
    type: Boolean,
    default: false,
  },
  ParticipantNum: {
    type: Number,
  },
});

const Option = mongoose.model("Option", OptionSchema);

module.exports = Option;
