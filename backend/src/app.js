const express = require("express");
const executeRoutes = require("./routes/execute.routes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    service: "misfire",
  });
});

app.use("/api", executeRoutes);

module.exports = app;
