const Browser = require('zombie');
var expect = require('chai').expect
var assert = require('assert');
var sinon = require('sinon');
var app = require('../index.js')
var passphrase = require('../assets/minigame1.js')

describe('feature testing', function(){
  const browser = new Browser();

  it('submits incorrect passphrase', function(done){
    browser.visit('http://localhost:8080/').then(function(){
      browser.fill('text', 'wrong')
      browser.pressButton('submit').then(function() {
        browser.assert.text('h1', 'You are a Robot')
      }).then(done, done)
    })
  })

  it('submits correct passphrase jaiye', function(done){
    sinon.stub(Math, 'random').returns(0.5);
    browser.visit('http://localhost:8080/').then(function(){
      browser.fill('text', 'jaiye')
      browser.pressButton('submit').then(function() {
        browser.assert.text('h1', 'Confirmed!')
        sinon.stub(Math, 'random').restore();
      }).then(done, done)
    })
  })
})
