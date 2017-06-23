describe('Drag and Drop minigame', function(){
  var DragAndDrop = require('../assets/dragAndDrop.js')

  it('when instantiated, contains gamekey and gamedata', function(){
    var game = new DragAndDrop(1);
    expect(game.gameKey).toEqual(401)
    expect(game.gameData).toEqual({ id: 401, img: 'car-front', object: 'logo' })
  })

  it('accepts a correct answer and returns true', function(){
    var game = new DragAndDrop();
    var answer = '190,110';
    expect(game.checkSolution(400, answer)).toBeTruthy();
  })

  it('accepts a incorrect answer and returns false', function(){
    var game = new DragAndDrop();
    var answer = '89,111';
    expect(game.checkSolution(400, answer)).not.toBeTruthy();
  })
})
