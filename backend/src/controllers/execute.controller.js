const executeRequest = require("../services/requestExecutor");

const execute = async (req, res) => {
  try {
    const result = await executeRequest(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      error: "Failed toe xecute request",
    });
  }
};

module.exports = { execute };
