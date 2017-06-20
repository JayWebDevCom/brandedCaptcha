var mainImages = ['./mainImage/cisse.jpg']
var responseImages = ['./responseImage/boots.jpg']
var testImages = ['./testImage/duck.png', './testImage/mug.jpg']

var Images = function(){

  this.mainImage = mainImages[0]
  this.testImages = [responseImages[0],
                    testImages[Math.floor(Math.random()*testImages.length)],
                    testImages[Math.floor(Math.random()*testImages.length)]]
};

  module.exports = Images;
