const Browser = require('zombie');
var expect = require('chai').expect
var assert = require('assert');
var sinon = require('sinon');
var app = require('../index.js');

describe('areaClick feature testing', function(){
  this.timeout(15000);
  const browser = new Browser();
  var stubRandom = sinon.stub(Math, 'random').returns(0);
  it('goes to index, gets redirected to miniGame', function(done){
    browser.visit('http://localhost:8080/').then(function(){
      browser.assert.url('http://localhost:8080/minigame');
    }).then(done)
  })

  it('has the coke logo minigame', function(done){
    browser.visit('http://localhost:8080/areaClick').then(function(){
      browser.assert.text('h1', 'Click the Coke Label');
    }).then(done)
  })

  it('clicks on the logo', function(done){
    browser.visit('http://localhost:8080/areaClick').then(function(){
      browser.click('#logoArea', function(){
        browser.assert.text('h1', 'You are a Robot');
        done();
      })
    })
  })
})
