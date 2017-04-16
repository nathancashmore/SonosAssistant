const mocha = require('mocha');
const expect = require('chai').expect;

const describe = mocha.describe;
const it = mocha.it;

const sonosRequest = require('../../../app/helper/sonos-api-request-helper');

describe('Sonos Api Request Helper', () => {
  it('should make request when asked to play song', (done) => {
    sonosRequest.playSong('cantina')
      .then((result) => {
        expect(result).to.deep.equal({ status: 'success' });
        done();
      });
  });
});
