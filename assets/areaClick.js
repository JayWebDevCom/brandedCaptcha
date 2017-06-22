var mains = [{id:201, img:'CocaCola.jpg'}]
var solutions = [{id:201, xLowLimit: 517, xHighLimit: 577, yLowLimit: 78, yHighLimit: 153}]

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
  return (
    Number(answer[1].x) > solution.xLowLimit &&
    Number(answer[1].x) < solution.xHighLimit &&
    Number(answer[1].y) > solution.yLowLimit &&
    Number(answer[1].y) < solution.yHighLimit
  );
}

module.exports = ClickArea;
