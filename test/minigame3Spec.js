const Browser = require('zombie');
var expect = require('chai').expect
var assert = require('assert');
var app = require('../index.js')

describe('minigame3', function(){
  const browser = new Browser();

  before(function(done) {
    browser.visit('http://localhost:8080/minigame3', done);
  });

  it('should display an image with id mainImage', function(){
    browser.assert.success()
    browser.assert.element('img#mainImage')
  })

  it('should display 3 images on the page with id testImage', function(){
    browser.assert.success()
    browser.assert.elements('img.testImage', 3)
  });

});
