const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  Fullname: {
    type: String,
    minLength: 3,
    required: [true, "Please provide fullname"],
  },
  // Lastname: {
  //   type: String,
  //   minLength: 2,
  //   required: [true, "Please provide lastname"],
  // },
  Username: {
    type: String,
    unique: true,
    required: [true, "Please provide username"],
  },
  // City: {
  //   type: String,
  //   minLength: 2,
  //   required: [true, "Please provide city"],
  // },
  Email: {
    type: String,
    required: [true, "Please provide email address"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  Password: {
    type: String,
    required: [true, "Please add a password"],
    minLength: 6,
    select: false,
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
