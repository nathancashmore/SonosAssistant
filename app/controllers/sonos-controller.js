const express = require('express');
const logger = require('winston');

const router = new express.Router();

router.get('/', (req, res) => {
  res.json({status: 'ok'});
});

router.post('/', (req, res) => {
  const song = req.body.result.parameters['music-song'];

  logger.log('info', `COMMAND will play song ${song}`);

  const jsonResponse = {
    "speech": `Ok, i'll play the song ${song} on Sonos`,
    "source": "sonos-assistant",
    "displayText": `Ok, i'll play the song ${song} on Sonos`
  };

  res.json(jsonResponse);
});

module.exports = router;
