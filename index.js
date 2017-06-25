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
app.use('/captchupFiles', express.static('captchupFiles'));

app.use(express.static(__dirname + '/images'));


app.get('/', function(req, res){
  res.redirect('/minigame')
});

app.get('/minigame', function(req, res){
  var captcha = new Minigames().getGame()
  req.session.gamekey = captcha.gamekey;
  res.render(captcha.type, {
    gamedata: captcha.gameData,
  })
});

app.get('/confirmed', function(req, res){
  if (req.session.authenticate){res.render('confirmed')}
  else{res.redirect('/failed')};
})

app.get('/failed', function(req, res){
  res.render('failed')
});

app.post('/areaClick', function(req, res){
  clickArea = require('./assets/areaClick.js');
  captcha = new clickArea();
  if(captcha.getSolution([req.session.gamekey , req.body])){
    req.session.authenticate = true
    return res.redirect('/confirmed')
  }else{
    req.session.authenticate = false
    return res.redirect('/failed')
  }
})

app.post('/imgAssoc', function(req, res){
  var ImgAssoc = require('./assets/imgAssoc')
  var captcha = new ImgAssoc
  if (captcha.checkAnswer(req.session.gamekey, req.body.promptImage)) {
    req.session.authenticate = true
    return res.redirect('/confirmed')
  }else{
    req.session.authenticate = false
    return res.redirect('/failed')
  }
})

app.post('/dragAndDrop', function(req, res){
  var DragAndDrop = require('./assets/dragAndDrop')
  var captcha = new DragAndDrop

  console.log(req.body.response)

  if (captcha.checkSolution(req.session.gameKey, req.body.response)) {
    req.session.authenticate = true
    return res.redirect('/confirmed')
  }else{
    req.session.authenticate = false
    return res.redirect('/failed')
  }
})

//TESTING ONLY ROUTES

app.get('/imgAssoc', function(req, res){
  var ImgAssoc = require('./assets/imgAssoc')
  var captcha = new ImgAssoc

  req.session.gameKey = captcha.gamekey

  res.render('imgAssoc', {
    gamedata: captcha.gameData
  });
});

app.get('/areaClick', function(req, res){
  var areaClick = require('./assets/areaClick')
  var captcha = new areaClick

  req.session.gamekey = captcha.gamekey

  res.render('clickArea', {
    gamedata: captcha.gameData
  });
})

app.get('/dragAndDrop', function(req, res){
  var dragAndDrop = require('./assets/dragAndDrop')
  var captcha = new dragAndDrop();

  req.session.gameKey = captcha.gameKey

  res.render('dragAndDrop', {
    gameData: captcha.gameData
  });
})

var modalRoutes = require('./routes/modalRoutes')
app.get('/modal', modalRoutes.index);

app.post('/modal', modalRoutes.indexPost);
