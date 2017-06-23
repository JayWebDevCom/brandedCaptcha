var mains = [
  { id: 400, img: 'something', object: 'thing'},
  { id: 401, img: 'car-front', object: 'logo'}
]

var DragAndDrop = function(stubNumber){
  var randomIndex = stubNumber || Math.floor(Math.random() * mains.length)
  this.type = 'dragAndDrop'
  this.gameKey = mains[randomIndex].id;
  this.gameData = mains[randomIndex];
}


module.exports = DragAndDrop;
