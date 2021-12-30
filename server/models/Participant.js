const mongoose = require("mongoose");

const ParticipantSchema = new mongoose.Schema({
  UserId: {
    type: String,
    required: [true, "Ankete katılmak için giriş yapmış olmanız gerekli"],
  },
});

const Participant = mongoose.model("Participant", ParticipantSchema);

module.exports = Participant;
