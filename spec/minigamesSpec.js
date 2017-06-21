var Minigames = require('../assets/minigames.js')
var Minigame1 = require('../assets/minigame1.js')

describe('minigames', function(){

  it('instantiates', function(){
    var minigames = new Minigames();
    expect(minigames instanceof Minigames).toBeTruthy();
  })

  it('can return a minigame from an array', function(){
    var minigames = new Minigames(0);
    var minigame1 = minigames.getGame();
    expect(minigame1 instanceof Minigame1).toBeTruthy();
  });
})
