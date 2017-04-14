const helper = require('./../spec-helper');
const mocha = require('mocha');
const expect = require('chai').expect;

const describe = mocha.describe;
const it = mocha.it;

describe('Sonos controller', () => {
  it('should be successful', () =>
    helper.browser.visit('/sonos/')
      .then(() => {
        helper.browser.assert.success();
        expect(helper.jsonResponse()).to.eql({status: 'ok'});
      })
  );
});
