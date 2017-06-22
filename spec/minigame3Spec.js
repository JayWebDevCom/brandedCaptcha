var Minigames = require('../assets/minigames.js')
var imgAssoc = require('../assets/minigame3.js')
var captcha
describe('imgAssoc', function(){

  beforeEach(function(){
    captcha = new imgAssoc();
  })

  it('instantiates', function(){
    expect(captcha instanceof imgAssoc).toBeTruthy();
  });

  it('automatically returns an image url when prompted with an argument', function(){
    expect(captcha.buildMainImageString({id:300, img:'cisse'})).toEqual('../minigame3/images/cisse.jpg');
  });

  it('returns the correct solution ID when provided a main image', function(){
    var mainImage = {id:300, img:'cisse'}
    expect(captcha.getSolution(mainImage.id)).toEqual({id:300, img:'adidasBoots'});
  });

  it('returns a prompt array', function(){
    expect(captcha.promptArray.length).toEqual(3)
  })

  it('#gameData method retruns a hash of 5 elements including the solution', function(){
    expect(Object.keys(captcha.getGameData()).length).toEqual(5)
    expect(captcha.getGameData().solution).toBeTruthy()
  })
})
