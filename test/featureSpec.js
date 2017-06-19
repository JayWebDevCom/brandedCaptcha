const Browser = require('zombie');
var expect = require('chai').expect
var assert = require('assert');
var app = require('../index.js')

describe('feature testing', function(){
  const browser = new Browser();

  it('submits correct passphrase', function(done){
    browser.visit('http://localhost:8080/').then(function(){
      browser.fill('text', 'anthony')
      browser.pressButton('submit').then(function() {
        browser.assert.text('h1', 'Confirmed!')
      }).then(done, done)
    })
  })

  it('submits incorrect passphrase', function(done){
    browser.visit('http://localhost:8080/').then(function(){
      browser.fill('text', 'jaiye')
      browser.pressButton('submit').then(function() {
        browser.assert.text('h1', 'You are a robot')
      }).then(done, done)
    })
  })

})
