var Minigames = require('../assets/minigames.js')
var areaClick = require('../assets/areaClick.js')
var minigames
describe('minigames', function(){

  it('instantiates', function(){
    minigames = new Minigames();
    expect(minigames instanceof Minigames).toBeTruthy();
  })

  it('can return a minigame from an array', function(){
    minigames = new Minigames(1);
    var game = minigames.getGame();
    expect(game instanceof areaClick).toBeTruthy();
  });
  
})
