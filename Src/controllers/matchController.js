const dataEngineService = require("../services/dataEngineService");

exports.getLiveMatches = async (req, res, next) => {
  try {
    const data = await dataEngineService.fetchLiveMatches();

    res.status(200).json({
      success: true,
      count: data.length,
      data
    });
  } catch (err) {
    next(err);
  }
};

exports.getTodayMatches = async (req, res, next) => {
  try {
    const data = await dataEngineService.fetchTodayMatches();

    res.status(200).json({
      success: true,
      count: data.length,
      data
    });
  } catch (err) {
    next(err);
  }
};

exports.getMatchStats = async (req, res, next) => {
  try {
    const data = await dataEngineService.fetchMatchStats(
      req.params.id
    );

    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
};
