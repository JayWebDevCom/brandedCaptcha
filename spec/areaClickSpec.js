var miniGame = require('../assets/areaClick.js')

describe('Clicking on an Area minigame', function(){
  miniGame = new miniGame(0);

  it('returns an image url string in game data array', function(){
    expect(miniGame.gameData).toEqual({ id: 202, img: 'google.jpg', prompt: 'Click the Orange Letter' });
  })

  it('returns a solution key', function(){
    expect(miniGame.gamekey).toEqual(202);
  })
  it('accepts correct solution', function(){
    expect(miniGame.getSolution([201, { x: 520, y: 130}])).toBeTruthy();
  })


  it('does not accept incorrect solution', function(){
    expect(miniGame.getSolution([201, { x: 50, y: 730}])).not.toBeTruthy();
  })
})
