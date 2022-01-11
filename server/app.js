require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

connectDB();

const auth = require("./routes/auth");
const survey = require("./routes/survey");
const profile = require("./routes/profile");
const admin = require("./routes/admin");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("Api running");
});

app.use("/api/auth", auth);
app.use("/api/survey", survey);
app.use("/api/profile", profile);
app.use("/api/admin", admin);

app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const PORT = process.env.PORT || 3545;

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}/`);
});
