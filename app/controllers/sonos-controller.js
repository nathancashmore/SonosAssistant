const express = require('express');
const logger = require('../helper/logger');
const responseHelper = require('../helper/response-helper');

const router = new express.Router();

router.get('/', (req, res) => {
  res.json(responseHelper.success('Everything is A Ok'));
});

router.post('/', (req, res) => {
  const song = req.body.result.parameters['music-song'];

  logger.info(`Will play song ${song}`);

  res.json(responseHelper.success(`Ok, i'll play the song ${song} on Sonos`));
});

module.exports = router;
