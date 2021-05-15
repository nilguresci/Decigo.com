const mongoose = require("mongoose");

const ParticipantSchema = new mongoose.Schema({
  UserId: {
    type: String,
    required: [true, "Please provide user id"],
  },
});

const Participant = mongoose.model("Participant", ParticipantSchema);

module.exports = Participant;
