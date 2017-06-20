var checkAnswer = require('../assets/antworten.js')

describe('passphrase', function(){

  it('checks answer is anthony', function(){
    expect(checkAnswer('anthony', 0)).toEqual(true)
  })

  it('checks answer is jaiye', function(){
    expect(checkAnswer('jaiye', 3)).toEqual(true)
  })

  it('checks answer is not adam', function(){
    expect(checkAnswer('adam', 4)).toEqual(false)
  })
})
