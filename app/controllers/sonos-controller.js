const express = require('express');
const logger = require('../helper/logger');
const aiResponse = require('../helper/api-ai-response-helper');
const sonosRequest = require('../helper/sonos-api-request-helper');

const router = new express.Router();

router.get('/', (req, res) => {
  res.json(aiResponse.success('Everything is A Ok'));
});

router.post('/', (req, res) => {
  const song = req.body.result.parameters['music-song'];

  logger.info(`Will play song ${song}`);

  sonosRequest.playSong(song)
    .then(() =>
      res.json(aiResponse.success(`Ok, i'll play the song ${song} on Sonos`))
    );
});

module.exports = router;
