const logger = require('../helper/logger');
const request = require('request-promise-native');

const hostPath = 'http://localhost:5005';

const requestUrl = {
  spotifySong: 'musicsearch/spotify/song'
};

function buildRequest(requestType, zone, param) {
  const uri = `${hostPath}/${zone}/${requestUrl[requestType]}/${param}`;
  logger.info(`Requesting ${uri}`);
  return { uri, json: true
  };
}

function playSong(song) {
  return request(buildRequest('spotifySong', 'Lounge', song));
}

const sonosApiRequestHelper = {
  playSong
};

module.exports = sonosApiRequestHelper;
