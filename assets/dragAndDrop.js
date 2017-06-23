var mains = [
  { id: 400, img: 'something', object: 'thing'},
  { id: 401, img: 'car-front', object: 'logo'}
]

var solutions = [
  { id: 400, xLowLimit: 90, xHighLimit: 110, yLowLimit: 100, yHighLimit: 110},
  { id: 401, xLowLimit: 160, xHighLimit: 250, yLowLimit: 70, yHighLimit: 120}
]

var DragAndDrop = function(stubNumber){
  var randomIndex = stubNumber || Math.floor(Math.random() * mains.length)
  this.type = 'dragAndDrop'
  this.gameKey = mains[randomIndex].id;
  this.gameData = mains[randomIndex];
}

DragAndDrop.prototype.checkSolution = function(gameKey, answer){
  function findSolution(hash){
    return hash.id === gameKey
  };

  var solution = solutions.find(findSolution)

  answer = answer.split(',')

  return ( Number(answer[0]) >= solution.xLowLimit &&
           Number(answer[0]) <= solution.xHighLimit &&
           Number(answer[1]) >= solution.yLowLimit &&
           Number(answer[1]) <= solution.yHighLimit )
};


module.exports = DragAndDrop;
