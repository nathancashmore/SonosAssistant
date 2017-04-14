const express = require('express');
const logger = require('winston');

const router = new express.Router();

router.get('/', (req, res) => {
  logger.log('info', res.data);

  res.json({ status: 'ok' });
});

module.exports = router;
