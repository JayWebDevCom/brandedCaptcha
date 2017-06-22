const Browser = require('zombie');
var expect = require('chai').expect
var assert = require('assert');
var sinon = require('sinon');
var app = require('../index.js')

describe('areaClick feature testing', function(){
  const browser = new Browser();
  var stubRandom = sinon.stub(Math, 'random').returns(0.7);
  var mouseClick = new MouseEvent('click', { clientX: 520, clientY: 180 })

  it('goes to index, gets redirected to miniGame', function(done){
    browser.visit('http://localhost:8080/').then(function(){
      browser.assert.url('http://localhost:8080/minigame');
    }).then(done)
  })

  it('has the coke logo minigame', function(done){
    browser.visit('http://localhost:8080/').then(function(){
      browser.assert.text('h1', 'Click on the Coke label');
    }).then(done)
  })

  it('clicks on the logo', function(done){
    browser.visit('http://localhost:8080/').then(function(){
      mouseClick().then(function(){
        browser.assert.text('h2', 'Correct');
        stubRandom.restore();
      }).then(done)
    })
  })
})
