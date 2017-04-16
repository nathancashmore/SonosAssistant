const request = require('request-promise-native');
const mocha = require('mocha');
const expect = require('chai').expect;

const describe = mocha.describe;
const it = mocha.it;

const playSongInputJson = require('../../data/play-song.json');
const playSongOutputJson = require('../../data/play-song-response.json');
const statusOkOutputJson = require('../../data/status-ok-response.json');

describe('Sonos controller', () => {
  it('should be successful when using GET', (done) => {
    const getRequest = {
      uri: 'http://localhost:3000/sonos/',
      json: true // Automatically parses the JSON string in the response
    };

    request(getRequest).then((body) => {
      expect(body).to.deep.equal(statusOkOutputJson);
      done();
    });
  });

  it('should be successful when using POST', (done) => {
    const postRequest = {
      method: 'POST',
      uri: 'http://localhost:3000/sonos/',
      body: playSongInputJson,
      json: true // Automatically stringifies the body to JSON
    };

    request(postRequest).then((body) => {
      expect(body).to.deep.equal(playSongOutputJson);
      done();
    });
  });
});
