const express = require("express");
const cors = require("cors");

const matchRoutes = require("./routes/matchRoutes");

const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/matches", matchRoutes);

app.use(errorMiddleware);

module.exports = app;
