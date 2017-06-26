var mains = [{id:300, img:'cisse'}, {id:301, img:'ronaldo'}, {id:302, img:'murray'}, {id:303, img:'rangeRover'}, {id:304, img:'lufthansaPlane'}]
var solutions = [{id:300, img:'adidasBoots'}, {id:301, img:'nikeBoots'}, {id:302, img:'headRacket'}, {id:303, img:'rangeRoverCar'}, {id:304, img:'lufthansaLogo'}]
var decoys = [{id:000, img:'dog'}, {id:001, img:'duck'}, {id:002, img:'mug'}, {id:003, img:'pen'}, {id:004, img:'plate'}]

var imgAssoc = function(stubNumber){
  var randomIndex = stubNumber || Math.floor(Math.random() * mains.length)
  var mainImage = mains[randomIndex]

  this.type = 'imgAssoc'
  this.gameKey = mainImage.id
  this.promptStrings = this.getPromptArray(mainImage.id)

  this.gameData = {
    mainString: mainImage.img,
    promptStrings: this.promptStrings
  };
};

imgAssoc.prototype.getPromptArray = function(mainImageid){
  function shuffle(array) {
    for (let i = array.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    };
  };
  var promptArray = [];
  for(i = 0; i<2; i++){ promptArray.push(decoys[Math.floor(Math.random() * decoys.length)].img)};
  promptArray.push(this.getSolution(mainImageid).img);
  shuffle(promptArray);
  return promptArray;
};

imgAssoc.prototype.getSolution = function(mainImageid){
  function findSolution(hash) {
    return hash.id === mainImageid;
  };
  return solutions.find(findSolution);
};

imgAssoc.prototype.checkAnswer = function(gameKey, name){
  function findImage(hash) {
    return gameKey === hash.id;
  };
  var returnedImage = solutions.find(findImage);
  return returnedImage.img === name
}

module.exports = imgAssoc;
