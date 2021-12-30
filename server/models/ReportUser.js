const mongoose = require("mongoose");

const ReportUserSchema = new mongoose.Schema({
  UserId: {
    type: String,
    required: [true, "Bir anket raporlamak için giriş yapmış olmanız gerekli"],
  },
  Reason: {
    type: String,
    required: [true, "Lütfen rapor sebebinizi giriniz"],
    minLength: [15, "Rapor sebebi 15 harften az olamaz"],
    maxLength: [100, "Rapor sebebi 100 harften fazla olamaz"],
  },
});
