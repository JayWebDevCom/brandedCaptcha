var imgAssoc = require('./imgAssoc.js')
var areaClick = require('./areaClick.js')
var dragAndDrop = require('./dragAndDrop.js')

var Minigames = function(givenIndex){
  this.gameArray = [new imgAssoc(), new areaClick(), new dragAndDrop()];
  this.index = givenIndex || Math.floor(Math.random() * this.gameArray.length)
};

Minigames.prototype.getGame = function(){
  return this.gameArray[this.index];
};

module.exports = Minigames;
