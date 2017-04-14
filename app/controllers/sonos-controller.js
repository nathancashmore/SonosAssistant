const express = require('express');
const logger = require('winston');

const router = new express.Router();

router.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

router.post('/', (req, res) => {
  const song = req.body.result.parameters['music-song'];

  logger.log('info', `COMMAND will play song ${song}`);

  res.json({ status: 'ok', song});
});

module.exports = router;
