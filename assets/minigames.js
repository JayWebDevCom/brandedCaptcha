var Minigame1 = require('./minigame1.js')
var Minigame3 = require('./minigame3.js')
var areaClick = require('./areaClick.js')

var Minigames = function(givenIndex){
  this.gameArray = [new Minigame1(), new Minigame3(), new areaClick()];
  this.index = givenIndex || Math.floor(Math.random() * this.gameArray.length)
};

Minigames.prototype.getGame = function(){
  return this.gameArray[this.index];
};

module.exports = Minigames;
