var Minigames = require('../assets/minigames.js')
var imgAssoc = require('../assets/imgAssoc.js')
var captcha
describe('imgAssoc', function(){

  beforeEach(function(){
    captcha = new imgAssoc(1);
  })

  it('instantiates', function(){
    expect(captcha instanceof imgAssoc).toBeTruthy();
  });

  it('automatically returns an image url when prompted with an argument', function(){
    expect(captcha.gameData.mainString).toEqual('ronaldo');
  });

  it('returns the correct solution ID when provided a main image', function(){
    var mainImage = {id:301, img:'ronaldo'}
    expect(captcha.getSolution(mainImage.id)).toEqual({id:301, img:'nikeBoots'});
  });

  it('returns a prompt array', function(){
    expect(captcha.promptStrings.length).toEqual(3)
  })

  it('Captcha carries info on gameData including a gamekey', function(){
    expect(Object.keys(captcha.gameData).length).toEqual(2)
    expect(captcha.gameKey).toBeTruthy()
  })
})
