const Browser = require('zombie');
var expect = require('chai').expect
var assert = require('assert');
var app = require('../index.js')
var sinon = require('sinon')

describe('imgAssoc', function(){
  this.timeout(15000);
  const browser = new Browser();

  beforeEach(function(done) {
    browser.visit('http://localhost:8080/imgAssoc', done);
  });

  it('should display an image with id mainImage', function(done){
    browser.assert.element('img#mainImage')
    done();
  });

  it('should display 3 images on the page with class testImage', function(done){
    browser.assert.elements('input.testImage', 3)
    done();
  });

  it('visits /failed when clicking input 0', function(done){
    browser.click('input#img0', function(){
      browser.assert.url('/failed');
      done();
    });
  });

  it('visits /failed when clicking input 1', function(done){
    browser.click('input#img1', function(){
      browser.assert.url('/confirmed');
      done();
    });
  });

  it('visits /confirmed when clicking input 2', function(done){
    browser.click('input#img2', function(){
      browser.assert.url('/failed');
      done();
    });
  });
});
