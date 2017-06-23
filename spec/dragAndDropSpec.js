describe('Drag and Drop minigame', function(){
  var DragAndDrop = require('../assets/dragAndDrop.js')

  it('when instantiated, contains gamekey and gamedata', function(){
    var game = new DragAndDrop(1);
    expect(game.gameKey).toEqual(401)
    expect(game.gameData).toEqual({ id: 401, img: 'car-front', object: 'logo' })
  })




})
