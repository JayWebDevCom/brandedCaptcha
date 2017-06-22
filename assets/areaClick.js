var mains = [{id:200, img:'cisse'}, {id:201, img:'CocaCola.jpg'}, {id:202, img:'murray'}, {id:203, img:'rangeRover'}, {id:204, img:'lufthansaPlane'}]
var solutions = [{id:200, img:'adidasBoots'}, {id:201, xLowLimit: 150, xHighLimit: 160, yLowLimit: 340, yHighLimit: 350}, {id:202, img:'headRacket'}, {id:203, img:'rangeRoverCar'}, {id:204, img:'lufthansLogo'}]

var Minigame = function(){

}

Minigame.prototype.generate = function (stubNumber) {
  var stubNumber = stubNumber || Math.floor(Math.random() * mains.length)
  return [
    2,
    mains[stubNumber].id,
    [mains[stubNumber].img]
  ]
}

Minigame.prototype.getSolution = function(answer){
  var id = answer[0]
  var xCoord = answer[1]
  var yCoord = answer[2]

  function findSolution(hash) {
    return hash.id === id;
  };

  var solution = solutions.find(findSolution);

  return (
    xCoord > solution.xLowLimit &&
    xCoord < solution.xHighLimit &&
    yCoord > solution.yLowLimit &&
    yCoord < solution.yHighLimit
  )
}

module.exports = Minigame;
