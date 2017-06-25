module.exports.index = function(req, res){
  res.render('modalPage')
}

module.exports.indexPost = function(req, res){
  var x = req.body.info
  res.send('Response from form submission: ' + x)
}
