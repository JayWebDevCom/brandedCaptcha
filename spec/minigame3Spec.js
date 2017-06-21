var Minigames = require('../assets/minigames.js')
var imgAssoc = require('../assets/minigame3.js')

describe('imgAssoc', function(){

  it('instantiates', function(){
    var captcha = new imgAssoc();
    expect(captcha instanceof imgAssoc).toBeTruthy();
  });

  it('automatically returns an image url when prompted with an argument', function(){
    var captcha = new imgAssoc();
    expect(captcha.buildMainImageString({id:300, img:'cisse'})).toEqual('./cisse.jpg');
  });

  it('returns the correct solution ID when provided a main image', function(){
    var captcha = new imgAssoc();
    mainImage = {id:300, img:'cisse'}
    expect(captcha.getSolution(mainImage.id)).toEqual({id:300, img:'adidasBoots'});
  });

})
