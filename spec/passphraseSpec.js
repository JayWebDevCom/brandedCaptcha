var randImage = require('../assets/nameGame.js')

describe('answer checking', function(){

  it('returns image 2 from array', function(){
    expect(randImage(1)).toEqual(['IMG_0774.jpg', 1])
  })

  it('returns image 4 from array', function(){
    expect(randImage(3)).toEqual(['IMG_0776.jpg', 3])
  })

  it('returns image 7 from array', function(){
    expect(randImage(6)).toEqual(['IMG_0779.jpg', 6])
  })
})
