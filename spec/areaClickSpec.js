var miniGame = require('../assets/areaClick.js')

describe('Clicking on an Area minigame', function(){
  miniGame = new miniGame(0);

  it('returns an image url string in game data array', function(){
    expect(miniGame.gameData).toEqual(['CocaCola.jpg']);
  })

  it('returns a solution key', function(){
    expect(miniGame.gamekey).toEqual(201);
  })
  it('accepts correct solution', function(){
    expect(miniGame.getSolution([201, '520,180'])).toBeTruthy();
  })


  it('does not accept incorrect solution', function(){
    expect(miniGame.getSolution([201, '128,245'])).not.toBeTruthy();
  })
})
