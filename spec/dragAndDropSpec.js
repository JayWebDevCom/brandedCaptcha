describe('Drag and Drop minigame', function(){
  var DragAndDrop = require('../assets/DragAndDrop.js')

  it('when instantiated, contains gamekey and gamedata', function(){
    var game = new DragAndDrop(1);
    expect(game.gameKey).toEqual(401)
    expect(game.gameData).toEqual(['car-front.jpg', 'logo.png'])
  })




})
