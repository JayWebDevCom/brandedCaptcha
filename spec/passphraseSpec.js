var passphrase = require('../js/passphrase.js')

describe('passphrase', function(){

  it('passphrase is anthony', function(){
    expect(passphrase).toEqual('anthony')
  })
})
