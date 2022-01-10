const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Survey = require("../models/Survey");
const Report = require("../models/Report");
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

    if (surveys.length === 0 || !surveys)
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
  const { SurveyId, OptionId, UserId } = req.body.data;
  //console.log("b survey id", SurveyId, OptionId, UserId);
  try {
    let survey = await Survey.findById(SurveyId);

    if (!survey || survey == null || survey == []) {
      return next(
        new ErrorResponse(`There's no survey with id of ${SurveyId}`, 400)
      );
    }

    let option = survey.Options.filter((o) => o._id == OptionId)[0];

    if (!option || option == null || option == []) {
      return next(
        new ErrorResponse(`There's no option with id of ${OptionId}`, 400)
      );
    }

    let participants = option.Participants;

    if (
      !participants ||
      participants == null ||
      participants == undefined ||
      participants == []
    ) {
      participants = [];
      participants.push({
        UserId,
      });
    } else {
      if (participants.filter((p) => p.UserId == UserId).length > 0) {
        // kullanıcı daha önce bu seçeneği işaretlediyse herhangi bir işlem yapılmasına gerek yok.
        participants = participants; //participants.filter((p) => p.UserId != UserId);
      } else {
        participants.push({
          UserId,
        });
      }
    }

    option.Participants = participants;
    option.ParticipantNum = option.Participants.length;

    survey.Options.forEach((o) => {
      if (o._id == option._id) {
        o = option;
      }
    });

    const result = await Survey.findByIdAndUpdate(SurveyId, survey);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.getUsers = async (req, res, next) => {
  //surveylerin kullnaıcı adını bulmak için oluşturuldu.
  try {
    const users = await User.find();

    if (users.length === 0 || !users)
      return next(
        new ErrorResponse(`There are currently no user to show`, 400)
      );

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

exports.addReport = async (req, res, next) => {
  const { surveyId } = req.body;
  console.log("Raporlanıyor", req.body);
  const isReportExist = await Report.find({ SurveyId: surveyId });
  console.log(isReportExist.length);

  if (isReportExist.length !== 0) {
    res.status(200).json({
      success: true,
      data: "Survey Already Reported",
    });
  } else {
    const report = await Report.create({
      SurveyId: surveyId,
    });

    res.status(201).json({
      success: true,
      data: report,
    });
  }
};

exports.getReportedSurveys = async (req, res, next) => {
  console.log("getReportedSurveys");
  const reports = await Report.find();

  const surveys = await Promise.all(
    reports.map(async (report) => {
      const survey = await Survey.findById(report.SurveyId);
      if (survey) {
        return {
          _id: survey._id,
          UserId: survey.UserId,
          Question: survey.Question,
          Options: survey.Options,
          Category: survey.Category,
          ReportId: report._id,
        };
      }
    })
  );

  res.status(201).json({
    success: true,
    data: surveys,
  });
};

exports.getSurveyByCategory = async (req, res, next) => {
  console.log("getSurveyByCategory");
  const category = req.params.category;
  console.log("category", category);
  const surveys = await Survey.find({ Category: category });

  console.log("surveys", surveys);

  if (!surveys || surveys.length === 0) {
    console.log("Hata");
    return next(
      new ErrorResponse(
        ` ${category} kategorisiyle ilgili anket bulunamadı.`,
        400
      )
    );
  }

  res.status(200).json({
    success: true,
    data: surveys,
  });
};
