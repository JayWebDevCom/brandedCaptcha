var mains = [{id:300, img:'cisse'}, {id:301, img:'ronaldo'}, {id:302, img:'murray'}, {id:303, img:'rangeRover'}, {id:304, img:'lufthansaPlane'}]
var solutions = [{id:300, img:'adidasBoots'}, {id:301, img:'nikeBoots'}, {id:302, img:'headRacket'}, {id:303, img:'rangeRoverCar'}, {id:304, img:'lufthansaLogo'}]
var decoys = [{id:000, img:'dog'}, {id:001, img:'duck'}, {id:002, img:'mug'}, {id:003, img:'pen'}, {id:004, img:'plate'}]

var imgAssoc = function(){
  this.type = 'imgAssoc'
  this.randomIndex = Math.floor(Math.random() * mains.length)

  this.promptArray = this.getPromptArray(this.getMainImage(this.randomIndex).id);
  this.promptStrings = this.buildPromptStrings(this.promptArray);

  this.gamekey = this.getMainImage(this.randomIndex).id

  this.gameData = {
    mainString: this.buildMainImageString(this.getMainImage(this.randomIndex)),
    promptStrings: this.promptStrings
  };
};

imgAssoc.prototype.getGameData = function () {
  return this.gameData
}


imgAssoc.prototype.getMainImage = function(index){
  return mains[index]
};


imgAssoc.prototype.buildMainImageString = function(mainImage){
  return mainImage.img
};


imgAssoc.prototype.getSolution = function(mainImageid){

  function findSolution(hash) {
    return hash.id === mainImageid;
  };

  return solutions.find(findSolution);

};


imgAssoc.prototype.getPromptArray = function(mainImageid){

  function shuffle(array) {
    for (let i = array.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    };
  };

  var promptArray = [];

  for(i = 0; i<2; i++){ promptArray.push(decoys[Math.floor(Math.random() * decoys.length)])};
  promptArray.push(this.getSolution(mainImageid));

  shuffle(promptArray);
  return promptArray;
};

imgAssoc.prototype.buildPromptStrings = function(array){
  promptStrings = []
  array.forEach(function(entry){
    promptStrings.push(entry.img)
  });
  return promptStrings
};

imgAssoc.prototype.checkAnswer = function(gamekey, name){

  function findImage(hash) {
    return gamekey === hash.id;
  };

  var returnedImage = solutions.find(findImage);

  return returnedImage.img === name
}

imgAssoc.prototype.testFunction = function(index){
  console.log('this is a test')
}

module.exports = imgAssoc;
