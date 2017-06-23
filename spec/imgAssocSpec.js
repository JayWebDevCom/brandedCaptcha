var Minigames = require('../assets/minigames.js')
var imgAssoc = require('../assets/imgAssoc.js')
var captcha
describe('imgAssoc', function(){

  beforeEach(function(){
    captcha = new imgAssoc();
  })

  it('instantiates', function(){
    expect(captcha instanceof imgAssoc).toBeTruthy();
  });

  it('automatically returns an image url when prompted with an argument', function(){
    expect(captcha.buildMainImageString({id:300, img:'cisse'})).toEqual('cisse');
  });

  it('returns the correct solution ID when provided a main image', function(){
    var mainImage = {id:300, img:'cisse'}
    expect(captcha.getSolution(mainImage.id)).toEqual({id:300, img:'adidasBoots'});
  });

  it('returns a prompt array', function(){
    expect(captcha.promptArray.length).toEqual(3)
  })

  it('Captcha carries info on gameData including a gamekey', function(){
    expect(Object.keys(captcha.getGameData()).length).toEqual(2)
    expect(captcha.gamekey).toBeTruthy()
  })
})
