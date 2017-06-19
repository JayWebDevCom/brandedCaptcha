var express = require('express');
var bodyparser = require('body-parser')
var app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.listen(8080, function(){
  console.log('port is 8080!')
})

app.set('view engine', 'ejs')
app.use(express.static(__dirname));

var ourImage = './images/picOne.jpg'

app.get('/', function(req, res){
  res.render('index', {
    ourImage: ourImage
  })
})

app.post('/anthony', function(req, res){
  console.log(req.body.text)
  if (req.body.text == require('./js/passphrase')) {
    return res.redirect('/confirmed')
  }else{
    return res.redirect('/')
  }
})

app.get('/confirmed', function(req, res){
  res.render('confirmed')
})
