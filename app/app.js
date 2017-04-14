const express = require('express');
const bodyParser = require('body-parser');

const sonosController = require('./controllers/sonos-controller');

const app = express();

// run the whole application in a directory
const basePath = app.locals.basePath = process.env.EXPRESS_BASE_PATH || '';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(`${basePath}/`, sonosController);
app.use(`${basePath}/sonos`, sonosController);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({ status: 'error', message: err.message });
});

module.exports = app;
