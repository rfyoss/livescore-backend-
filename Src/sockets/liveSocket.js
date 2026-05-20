const dataEngineService = require("../services/dataEngineService");

module.exports = (io) => {

  let previousData = [];

  setInterval(async () => {
    try {

      const liveData =
        await dataEngineService.fetchLiveMatches();

      const changed =
        JSON.stringify(previousData) !==
        JSON.stringify(liveData);

      if (changed) {

        io.emit("live_matches_update", liveData);

        previousData = liveData;

        console.log("Realtime update emitted");
      }

    } catch (err) {
      console.error(err.message);
    }
  }, 60000);

};
