const Browser = require('zombie');
var expect = require('chai').expect
var assert = require('assert');
var app = require('../index.js')

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
})
