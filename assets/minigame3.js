var mains = [{id:300, img:'cisse'}, {id:301, img:'ronaldo'}, {id:302, img:'murray'}, {id:303, img:'rangeRover'}, {id:304, img:'lufthansaPlane'}]
var solutions = [{id:300, img:'adidasBoots'}, {id:301, img:'nikeBoots'}, {id:302, img:'headRacket'}, {id:303, img:'rangeRoverCar'}, {id:304, img:'lufthansLogo'}]
var decoys = [{id:000, img:'dog'}, {id:001, img:'duck'}, {id:002, img:'mug'}, {id:003, img:'pen'}, {id:004, img:'plate'}]

//

var imgAssoc = function(){

  this.randomIndex = Math.floor(Math.random() * mains.length)
  //
  this.mainImage = this.getMainImage(this.randomIndex)
  this.mainImgString = this.buildMainImageString(this.mainImage)
  //
  this.promptArray = this.getPromptArray(this.mainImage.id)
  this.solution = null

};

imgAssoc.prototype.getMainImage = function(index){
  return mains[index]
};

imgAssoc.prototype.buildMainImageString = function(mainImage){
  return './' + mainImage.img + '.jpg'
};

imgAssoc.prototype.getSolution = function(mainImageid){

  function findSolution(hash) {
    return hash.id === mainImageid;
  };

  return solutions.find(findSolution);

};

imgAssoc.prototype.getPromptArray = function(mainImageid){
  var promptArr = [];
  var randDecoyElemOne = decoys[Math.floor(Math.random() * decoys.length)];
  var randDecoyElemTwo = decoys[Math.floor(Math.random() * decoys.length)];
  promptArr.push(randDecoyElemOne);
  promptArr.push(randDecoyElemTwo);
  promptArr.push(this.getSolution(mainImageid)).;
  return promptArr;
};

module.exports = imgAssoc;
