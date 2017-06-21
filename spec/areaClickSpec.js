var miniGame = require('../assets/areaClick.js')

describe('Clicking on an Area minigame', function(){
  miniGame = new miniGame();

  it('returns an image url string and solution key', function(){
    expect(miniGame.generate(1)).toEqual([2, 201, ['CocaCola.jpg']]);
  })

  it('accepts correct solution', function(){
    expect(miniGame.getSolution([201, 158, 345])).toBeTruthy();
  })


  it('does not accept incorrect solution', function(){
    expect(miniGame.getSolution([201, 128, 245])).not.toBeTruthy();
  })
})
