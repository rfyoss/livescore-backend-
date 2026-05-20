const axios = require("axios");

const BASE_URL = process.env.DATA_ENGINE_URL;

exports.fetchLiveMatches = async () => {
  const response = await axios.get(
    `${BASE_URL}/matches/live`
  );

  return response.data.data || [];
};

exports.fetchTodayMatches = async () => {
  const response = await axios.get(
    `${BASE_URL}/matches/today`
  );

  return response.data.data || [];
};

exports.fetchMatchStats = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/stats/${id}`
  );

  return response.data.data || {};
};
