var mains = [{id:201, img:'CocaCola.jpg'}]
var solutions = [{id:201, xLowLimit: 517, xHighLimit: 577, yLowLimit: 158, yHighLimit: 240}]

var ClickArea = function(stubNumber){
  var randomIndex = stubNumber || Math.floor(Math.random() * mains.length)
  this.type = 'clickArea'
  this.gamekey = mains[randomIndex].id;
  this.gameData = [mains[randomIndex].img];
}

ClickArea.prototype.getSolution = function(answer){
  function findSolution(hash) {
    return hash.id === answer[0];
  }
  var solution = solutions.find(findSolution);
  var coords = answer[1].split(',')
  return (
    Number(coords[0]) > solution.xLowLimit &&
    Number(coords[0]) < solution.xHighLimit &&
    Number(coords[1]) > solution.yLowLimit &&
    Number(coords[1]) < solution.yHighLimit
  );
}

module.exports = ClickArea;
