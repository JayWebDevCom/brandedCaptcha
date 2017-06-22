var express = require('express');
var bodyparser = require('body-parser')
var app = express();
var session = require('express-session');
var getAnswer = require('./assets/antworten')
var Minigames = require('./assets/minigames')

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(session({
  secret: 'anthony',
  resave: true,
  saveUninitialized: true,
}));

app.listen(8080, function(){
  console.log('port is 8080!')
})

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/images'));

app.get('/', function(req, res){
  res.redirect('/minigame')
});

app.get('/minigame', function(req, res){
  var captcha = new Minigames().getGame()
  req.session.gamekey = captcha.gamekey;
  var viewString = captcha.type + '.ejs'
  res.render(viewString, {
    gamedata: captcha.gameData,
  })
});

app.post('/minigame', function(req, res){
  if (getAnswer(req.body.text, req.session.ourNumber)) {
    req.session.authenticate = true
    return res.redirect('/confirmed')
  }else{
    return res.redirect('/failed')
  }
})

app.get('/imgAssoc', function(req, res){
  var ImgAssoc = require('./assets/imgAssoc')
  var captcha = new ImgAssoc

  req.session.promptArray = captcha.gameData.promptArray
  req.session.mainImageId = captcha.gameData.mainId

  res.render('imgAssoc', {
    gamedata: captcha.gameData
  });
});

app.post('/imgAssoc', function(req, res){
  var ImgAssoc = require('./assets/imgAssoc')
  var captcha = new ImgAssoc

  var mainImageId = req.session.mainImageId
  var promptArray = req.session.promptArray
  var index = req.body.promptImage


  if (captcha.checkAnswer(mainImageId, index, promptArray)) {
    req.session.authenticate = true
    return res.redirect('/confirmed')
  }else{
    req.session.authenticate = false
    return res.redirect('/failed')
  }
})

app.get('/confirmed', function(req, res){
  if (req.session.authenticate){res.render('confirmed')}
  else{res.redirect('/failed')};
})

app.get('/failed', function(req, res){
  res.render('failed')
});

app.post('/checkanswerAreaClick', function(req, res){
  clickArea = require('./assets/areaClick.js');
  console.log(req.body)
  captcha = new clickArea();
  if(captcha.getSolution([req.session.gamekey , req.body])){
    req.session.authenticate = true
    return res.redirect('/confirmed')
  }else{
    req.session.authenticate = false
    return res.redirect('/failed')
  }
})
