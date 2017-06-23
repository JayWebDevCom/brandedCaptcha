var mains = [
  { id: 400, img: 'something', object: 'thing'},
  { id: 401, img: 'car-front', object: 'logo'}
]

var solutions = [
  { id: 400, xLowLimit: 90, xHighLimit: 110, yLowLimit: 100, yHighLimit: 110},
  { id: 401, x: null, y: null}
]

var DragAndDrop = function(stubNumber){
  var randomIndex = stubNumber || Math.floor(Math.random() * mains.length)
  this.type = 'dragAndDrop'
  this.gameKey = mains[randomIndex].id;
  this.gameData = mains[randomIndex];
}

DragAndDrop.prototype.checkSolution = function(gamekey, answer){
  function findSolution(hash){
    return hash.id === gamekey
  };

  var solution = solutions.find(findSolution)

  return ( answer.x >= solution.xLowLimit &&
           answer.x <= solution.xHighLimit &&
           answer.y >= solution.yLowLimit &&
           answer.y <= solution.yHighLimit )
};


module.exports = DragAndDrop;
