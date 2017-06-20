var imageArray = [
  "IMG_0773.jpg",
  "IMG_0774.jpg",
  "IMG_0775.jpg",
  "IMG_0776.jpg",
  "IMG_0777.jpg",
  "IMG_0778.jpg",
  "IMG_0779.jpg"
]
var randImage = function(number){
  var imageIndex = number || Math.floor(Math.random() * imageArray.length)
  return [imageArray[imageIndex], imageIndex]
}
module.exports = randImage;
