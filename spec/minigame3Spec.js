var Minigames = require('../assets/minigames.js')
var imgAssoc = require('../assets/minigame3.js')

describe('imgAssoc', function(){

  beforeEach(function(){

  })

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
    var mainImage = {id:300, img:'cisse'}
    expect(captcha.getSolution(mainImage.id)).toEqual({id:300, img:'adidasBoots'});
  });

  it('returns a prompt array', function(){
    var captcha = new imgAssoc();
    var mainImage = {id:300, img:'cisse'}
    captcha.getPromptArray(mainImage.id)
    expect(captcha.promptArray.length).toEqual(3)
  })

  it('returns gamedata hash', function(){

    var returnedHash = {
      mainId: 300, mainString: '../minigame3/images/cisse.jpg',
      promptArray: [ { id: 4, img: 'plate' }, { id: 300, img: 'adidasBoots' }, { id: 2, img: 'mug' } ],
      promptStrings: [ '../minigame3/images/adidasBoots.jpg', '../minigame3/images/duck.jpg', '../minigame3/images/plate.jpg' ],
      solution: { id: 300, img: 'adidasBoots' }
    }
    var captcha = new imgAssoc();
    captcha.gameData.mainId = 300
    var mainImage = {id:300, img:'cisse'}
    console.log('gamedata', captcha.gameData)
    console.log('the array:', captcha.getGameData(mainImage).promptStrings)


    // expect(captcha.getGameData().promptStrings.includes('../minigame3/images/adidasBoots.jpg')).toBe(true)

  })
})
