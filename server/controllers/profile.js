const jwt = require("jsonwebtoken");

const Survey = require("../models/Survey");

exports.getMySurveys = async (req, res, next) => {
  try {
    res.status(200);
  } catch (error) {
    next(error);
  }
};

exports.getOneSurvey = async (req, res, next) => {
  try {
    res.status(200);
  } catch (error) {
    next(error);
  }
};

exports.updateSurvey = async (req, res, next) => {
  try {
    res.status(200);
  } catch (error) {
    next(error);
  }
};

exports.deleteSurvey = async (req, res, next) => {
  try {
    res.status(200);
  } catch (error) {
    next(error);
  }
};
