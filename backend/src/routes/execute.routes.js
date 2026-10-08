const express = require("express");
const { execute } = require("../controllers/execute.controller");
const { route } = require("../app");

const router = express.Router();

router.post("/execute", execute);

module.exports = router;
