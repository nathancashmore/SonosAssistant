const mocha = require('mocha');
const expect = require('chai').expect;

const describe = mocha.describe;
const it = mocha.it;

const apiResponse = require('../../../app/helper/api-ai-response-helper');

describe('Api.Ai Response Helper', () => {
  it('should provide success response in Api.Ai format', () => {
    const expectedResponse = {
      speech: 'good job',
      source: 'sonos-assistant',
      displayText: 'good job',
      status: {
        code: 200,
        errorType: 'success'
      }
    };

    expect(apiResponse.success('good job')).to.deep.equal(expectedResponse);
  });

  it('should provide failure response in Api.Ai format', () => {
    const expectedResponse = {
      status: {
        code: 500,
        errorType: 'failure',
        errorDetails: 'A failure occurred with the message sad face'
      }
    };

    expect(apiResponse.error(500, new Error('sad face'))).to.deep.equal(expectedResponse);
  });
});
