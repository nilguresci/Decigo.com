const jwt = require("jsonwebtoken");

const Survey = require("../models/Survey");
const Option = require("../models/Option");
const Participant = require("../models/Participant");
const ErrorResponse = require("../utils/errorResponse");

exports.addSurvey = async (req, res, next) => {
  const { UserId, Question, Time, Options, Category, SuggestionNum } = req.body;

  try {
    const survey = await Survey.create({
      UserId,
      Question,
      Time,
      Options,
      Category,
      SuggestionNum,
    });

    res.status(201).json({
      success: true,
      data: survey,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSurveys = async (req, res, next) => {
  try {
    const surveys = await Survey.find();

    if (surveys.length === 0)
      return next(
        new ErrorResponse(`There are currently no survey to show`, 400)
      );

    res.status(200).json({
      success: true,
      data: surveys,
    });
  } catch (error) {
    next(error);
  }
};

exports.getOneSurvey = async (req, res, next) => {
  try {
    const survey = await Survey.findById(req.params.id);

    if (!survey)
      return next(
        new ErrorResponse(`There's no survey with id of ${req.params.id}`, 400)
      );

    res.status(200).json({
      success: true,
      data: survey,
    });
  } catch (error) {
    next(error);
  }
};

exports.joinSurvey = async (req, res, next) => {
  //survey_id , option_id, user_id
  const { SurveyId, OptionId, UserId } = req.body;
  try {
    const survey = await Survey.findById(SurveyId);
    const option = await survey.findById(OptionId);

    const participant = { UserId };

    const surv_option = await option.findOneAndUpdate(
      { _id: OptionId },
      {
        $addToSet: {
          Participants: participant,
        },
      }
    );

    res.status(200).json({
      success: true,
      data: surv_option,
    });
  } catch (error) {
    next(error);
  }
};
