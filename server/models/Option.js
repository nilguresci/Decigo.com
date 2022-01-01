const mongoose = require("mongoose");
const Participant = require("./Participant").schema;

const OptionSchema = new mongoose.Schema({
  Text: {
    type: String,
    required: [true, "Lütfen anket seçeneğinizin boş olmadığından emin olunuz"],
    minLength: [3, "Anket seçeneği üç harften az olamaz"],
    maxLength: [80, "80 karakteri geçmemelisiniz."],
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
