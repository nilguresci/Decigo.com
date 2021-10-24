const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    () => console.log("Connected to db")
  );
};

module.exports = connectDB;