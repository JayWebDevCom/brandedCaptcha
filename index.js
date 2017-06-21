var express = require('express');
var bodyparser = require('body-parser')
var app = express();
var session = require('express-session');
var getAnswer = require('./assets/antworten')
var getImage = require('./assets/minigame1')
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
  res.send(captcha)
    req.session.captcha = captcha
    console.log(req.session.captcha)
    req.session.solution = captcha.solution
});

app.post('/minigame', function(req, res){
  console.log(req.body.text)
  if (getAnswer(req.body.text, req.session.ourNumber)) {
    req.session.authenticate = true
    return res.redirect('/confirmed')
  }else{
    return res.redirect('/failed')
  }
})

app.get('/minigame3', function(req, res){
  var ImgAssoc = require('./assets/minigame3')
  var captcha = new ImgAssoc
  res.render('minigame3', {
    mainImageString: captcha.mainImageString,
    promptArray: captcha.promptStrings,
  });
});

app.get('/confirmed', function(req, res){
  if (req.session.authenticate){res.render('confirmed')}
  else{res.redirect('/failed')};
})

app.get('/failed', function(req, res){
  res.render('failed')
});
