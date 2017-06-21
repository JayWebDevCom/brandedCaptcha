var Minigames = require('../assets/minigames.js')
var Minigame3 = require('../assets/minigame3.js')

describe('minigames', function(){

  it('instantiates', function(){
    var minigames = new Minigames();
    expect(minigames instanceof Minigames).toBeTruthy();
  })

  it('can return a minigame from an array', function(){
    var minigames = new Minigames(1);
    var minigame3 = minigames.getGame();
    expect(minigame3 instanceof Minigame3).toBeTruthy();
  });
})
