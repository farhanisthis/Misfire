const axios = require("axios");

const executeRequest = async ({ url, method = "GET", headers = {}, body }) => {
  const startTime = Date.now();

  try {
    const response = await axios({
      url,
      method,
      headers,
      data: body,
      validateStatus: () => true,
    });

    const duration = Date.now() - startTime;

    return {
      success: true,
      status: response.status,
      headers: response.headers,
      body: response.data,
      duration,
    };
  } catch (error) {
    const duration = Date.now() - startTime;

    return {
      success: false,
      error: error.message,
      duration,
    };
  }
};

module.exports = executeRequest;
