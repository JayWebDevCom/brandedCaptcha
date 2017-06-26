var miniGame = require('../assets/areaClick.js')

describe('Clicking on an Area minigame', function(){
  miniGame = new miniGame(1);

  it('returns an image url string in game data array', function(){
    expect(miniGame.gameData).toEqual({ id: 204, img: 'wwe2k18.jpg', prompt: 'Click on the number eight' });
  })

  it('returns a solution key', function(){
    expect(miniGame.gameKey).toEqual(204);
  })
  it('accepts correct solution', function(){
    expect(miniGame.getSolution([201, { x: 140, y: 60}])).toBeTruthy();
  })

  it('does not accept incorrect solution', function(){
    expect(miniGame.getSolution([201, { x: 50, y: 730}])).not.toBeTruthy();
  })
})
