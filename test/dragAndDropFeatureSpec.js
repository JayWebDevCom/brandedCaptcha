const Browser = require('zombie');
var expect = require('chai').expect
var assert = require('assert');
var sinon = require('sinon');
var app = require('../index.js');

describe('Drag and Drop minigame', function(){
  const browser = new Browser();

  it('navigates to DragAndDrop page', function(done){
    browser.visit('http://localhost:8080/drag-and-drop').then(function(){
      browser.assert.success();
    }).then(done)
  })


})
