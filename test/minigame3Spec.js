const Browser = require('zombie');
var expect = require('chai').expect
var assert = require('assert');
var app = require('../index.js')

describe('minigame3', function(){
  const browser = new Browser();

  it('the route \/minigame3 should exist', function(done){
    browser.visit('http://localhost:8080/minigame3').then(function(){
      browser.assert.success()
    }).then(done, done)
  })

  it('should display an image with id #mainImage', function(done){
    browser.visit('http://localhost:8080/minigame3').then(function(){
      browser.assert.className('img', 'mainImage')
    }).then(done, done)
  });

  it('should display 4 images on the page', function(done){
    browser.visit('http://localhost:8080/minigame3').then(function(){
      browser.assert.elements('img', 4)
    }).then(done, done)
  });
});
