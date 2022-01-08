const Report = require("../models/Report");
const Survey = require("../models/Survey");
exports.decideReport = async (req, res, next) => {
  try {
    const { decide, SurveyId, ReportId } = req.body;

    if (decide) {
      await Survey.deleteOne({ _id: SurveyId });
      await Report.deleteOne({ _id: ReportId });
      res.status(200).json({
        success: true,
        message: `Anket yayından kaldırıldı.`,
        data: SurveyId,
      });
    } else {
      await Report.deleteOne({ _id: ReportId });
      res.status(200).json({
        success: true,
        message: `Rapor silindi.`,
        data: ReportId,
      });
    }
  } catch (error) {
    next(error);
  }
};
