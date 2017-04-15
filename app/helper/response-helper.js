function successResponse(text) {
  return {
    speech: text,
    source: 'sonos-assistant',
    displayText: text,
    status: {
      code: 200,
      errorType: 'success',
    }
  };
}

function errorResponse(code, error) {
  return {
    status: {
      code,
      errorType: 'failure',
      errorDetails: `A failure occurred with the message ${error.message}`,
    }
  };
}

const responseHelper = {
  success: successResponse,
  error: errorResponse
};

module.exports = responseHelper;
