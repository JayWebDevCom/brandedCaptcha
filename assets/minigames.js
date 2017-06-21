var Minigame1 = require('./passphrase.js')

var Minigames = function(givenIndex){
  this.gameArray = [new Minigame1()];
  this.index = givenIndex || Math.floor(Math.random() * this.gameArray.length)
};

Minigames.prototype.getGame = function(){
  return this.gameArray[this.index];
};

module.exports = Minigames;
