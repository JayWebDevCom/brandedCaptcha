var mains = [
  { id: 201, img:'CocaCola.jpg', prompt: 'Click the Coke Label' },
  { id: 203, img: 'jordan_dunk.jpg', prompt: 'Click on Michael Jordan\'s Armband'},
  { id: 204, img: 'wwe2k18.jpg', prompt: 'Click on the number eight' },
  { id: 202, img:'google.jpg', prompt: 'Click the Orange Letter' }
]
var solutions = [
  { id: 201, xLowLimit: 138, xHighLimit: 181, yLowLimit: 57, yHighLimit: 125 },
  { id: 202, xLowLimit: 163, xHighLimit: 226, yLowLimit: 58, yHighLimit: 124 },
  { id: 203, xLowLimit: 304, xHighLimit: 341, yLowLimit: 207, yHighLimit: 245 },
  { id: 204, xLowLimit: 287, xHighLimit: 348, yLowLimit: 38, yHighLimit: 104 }
]

var ClickArea = function(stubNumber){
  var randomIndex = stubNumber || Math.floor(Math.random() * mains.length)
  this.type = 'clickArea'
  this.gamekey = mains[randomIndex].id;
  this.gameData = mains[randomIndex];
}

ClickArea.prototype.getSolution = function(answer){
  console.log(answer)
  function findSolution(hash) {
    return hash.id === answer[0];
  }
  var solution = solutions.find(findSolution);
  return (
    Number(answer[1].x) > solution.xLowLimit &&
    Number(answer[1].x) < solution.xHighLimit &&
    Number(answer[1].y) > solution.yLowLimit &&
    Number(answer[1].y) < solution.yHighLimit
  );
}

module.exports = ClickArea;
