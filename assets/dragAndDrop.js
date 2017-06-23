var mains = [
  { id: 400, img: 'jetty', object: 'boat'},
  { id: 401, img: 'car-front', object: 'logo'},
  { id: 402, img: 'hugh', object: 'glasses'}
]

var solutions = [
  { id: 400, xLowLimit: 125, xHighLimit: 375, yLowLimit: 95, yHighLimit: 205},
  { id: 401, xLowLimit: 160, xHighLimit: 250, yLowLimit: 70, yHighLimit: 120},
  { id: 402, xLowLimit: 137, xHighLimit: 184, yLowLimit: 90, yHighLimit: 134}
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
