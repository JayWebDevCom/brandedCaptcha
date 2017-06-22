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
    expect(miniGame.getSolution([201, { x: 520, y: 130}])).toBeTruthy();
  })


  it('does not accept incorrect solution', function(){
    expect(miniGame.getSolution([201, { x: 50, y: 730}])).not.toBeTruthy();
  })
})
