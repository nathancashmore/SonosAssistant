const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./helper/logger');
const responseHelper = require('./helper/response-helper');

const sonosController = require('./controllers/sonos-controller');

const app = express();

function errorResponse(code, err) {
  return responseHelper.error(code, err);
}

// run the whole application in a directory
const basePath = app.locals.basePath = process.env.EXPRESS_BASE_PATH || '';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(`${basePath}/`, sonosController);
app.use(`${basePath}/sonos`, sonosController);

app.use((req, res) => {
  logger.error('Page Not Found');
  res.status(404);
  res.json(errorResponse(404, new Error('Not Found')));
});

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500);
  res.json(errorResponse(500, err));
  next(err);
});

module.exports = app;
