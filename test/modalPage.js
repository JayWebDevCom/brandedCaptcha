const Browser = require('zombie');
var expect = require('chai').expect
var assert = require('assert');
var app = require('../index.js')

describe('Ajax Call', function() {

  const browser = new Browser();
  var text = 'This is my information'

  before(function(done) {
    this.timeout(15000);
    browser.visit('http://localhost:8080/modal', done);
  });

  describe('submits form and receives response', function() {

    before(function(done) {
      browser
      .fill('info', text)
      .pressButton('Submit', done);
    });

    it('should be successful and remain on same page', function() {
      browser.assert.success();
      browser.assert.url('/modal');
    });

    it('should display entered text in the response div', function() {
        browser.assert.text('p#response', 'Response from form submission: ' + text);
    });
  });
});
