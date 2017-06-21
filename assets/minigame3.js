var mains = [{id:300, img:'cisse'}, {id:301, img:'ronaldo'}, {id:302, img:'murray'}, {id:303, img:'rangeRover'}, {id:304, img:'lufthansaPlane'}]
var solutions = [{id:300, img:'adidasBoots'}, {id:301, img:'nikeBoots'}, {id:302, img:'headRacket'}, {id:303, img:'rangeRoverCar'}, {id:304, img:'lufthansaLogo'}]
var decoys = [{id:000, img:'dog'}, {id:001, img:'duck'}, {id:002, img:'mug'}, {id:003, img:'pen'}, {id:004, img:'plate'}]

//

var imgAssoc = function(){

  this.type = 3
  this.randomIndex = Math.floor(Math.random() * mains.length)
  //
  this.mainImage = this.getMainImage(this.randomIndex)
  this.mainImageString = this.buildMainImageString(this.mainImage)
  //
  this.promptArray = this.getPromptArray(this.mainImage.id)
  this.promptStrings = this.buildPromptStrings(this.promptArray)
  //
  this.solution = this.getSolution(this.mainImage.id)

};


imgAssoc.prototype.getMainImage = function(index){
  return mains[index]
};


imgAssoc.prototype.buildMainImageString = function(mainImage){
  return '../minigame3/images/' + mainImage.img + '.jpg'
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
    promptStrings.push('../minigame3/images/' + entry.img + '.jpg')
  });
  return promptStrings
};

module.exports = imgAssoc;
