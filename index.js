var express = require('express');
var bodyparser = require('body-parser')
var app = express();
var session = require('express-session');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/captcha_dev');

var db = mongoose.connection;


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
app.use(express.static(__dirname));

var ourImage = './images/picOne.jpg'

app.get('/', function(req, res){
  res.render('index', {
    ourImage: ourImage
  })
})

app.get('/db', function(req, res){
  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', function(){
    res.send('We are connected!');
  });
});

app.post('/anthony', function(req, res){
  console.log(req.body.text)
  if (req.body.text == require('./assets/passphrase')) {
    req.session.authenticate = true
    return res.redirect('/confirmed')
  }
  else{ res.redirect('/failed')
  }
})

app.get('/confirmed', function(req, res){
  if (req.session.authenticate){res.render('confirmed')}
  else{res.redirect('/failed')};
})

app.get('/failed', function(req, res){
  res.render('failed')
});
