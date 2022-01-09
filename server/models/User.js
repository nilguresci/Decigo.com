const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  Fullname: {
    type: String,
    minLength: [3, "Tam adınızı ve soyadınızı girdiğinizden emin olunuz"],
    required: [true, "Lütfen tam isminizi giriniz"],
  },
  Username: {
    type: String,
    unique: [
      true,
      "Kullanıcı adı zaten kullanımda. Lütfen başka bir isim seçiniz",
    ],
    required: [true, "Lütfen kullanıcı adınızı giriniz"],
  },
  Email: {
    type: String,
    required: [true, "Lütfen email adresinizi giriniz"],
    unique: [true, "Bu Email zaten kullanımda"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Lütfen email adresinizi doğru girdiğinizden emin olunuz",
    ],
  },
  Password: {
    type: String,
    required: [true, "Lütfen şifre giriniz"],
    minLength: [6, "Şifreniz 6 karakterden kısa olamaz"],
    select: false,
  },
  AvatarNo: {
    type: String,
    default: 0,
  },
  IsAdmin: {
    type: Boolean,
    default: false,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) next();

  const salt = await bcrypt.genSalt(10);
  this.Password = await bcrypt.hash(this.Password, salt);
  next();
});

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.Password);
};

UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
