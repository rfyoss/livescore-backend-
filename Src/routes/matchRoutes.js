const express = require("express");

const {
  getLiveMatches,
  getTodayMatches,
  getMatchStats
} = require("../controllers/matchController");

const router = express.Router();

router.get("/live", getLiveMatches);

router.get("/today", getTodayMatches);

router.get("/stats/:id", getMatchStats);

module.exports = router;
