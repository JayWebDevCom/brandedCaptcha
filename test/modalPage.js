const Browser = require('zombie');
var expect = require('chai').expect
var assert = require('assert');
var app = require('../index.js')

describe('Ajax Call', function() {

  const browser = new Browser();
  var text = 'This is my information'

  before(function(done) {
    browser.visit('http://localhost:8080/modal', done);
  });

  describe('submits form', function() {

    before(function(done) {
      browser
      .fill('info', text)
      .pressButton('Submit', done);
    });

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should display entered text in the response div', function() {
        browser.assert.text('p#response', 'Response from form submission ' + text);
    });
  });
});
