var miniGame = require('../assets/areaClick.js')

describe('Clicking on an area minigame', function(){

  it('returns an image url string', function(){
    miniGame = new miniGame();
    expect(miniGame.generate(1)).toEqual([1, 1, ['CocaCola.jpg']);
  })
})
