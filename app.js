var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MojioClientLite= require("mojio-client-lite");
var http = require("https");




var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


var config = {
  application: 'bede7bac-794d-4af1-9952-578a8ee63b63',
  secret:'fe5d8b81-e5f5-4dd6-9879-4348d3435658'
};

var mojio_client = new MojioClientLite(config);

mojio_client.authorize('clarachu','save-ty').then(function(res,err){

  if(typeof(err)!="undefined")
  {
    console.log("login error");
    return;
  }
  console.log("login successful");
  // login successful
  // write your logic here
  console.log("Start");
  var options = {
    host: 'api.moj.io',
  path: '/v2/vehicles',
  method: 'GET',
    json: true,
  headers: {
    authorization: 'Bearer 0bdad707-efaa-474e-9dde-031e07b9cb68'
  }};

  var x = http.request(options,function(res){
    console.log("Connected");
    res.setEncoding('utf8');
    res.on('data',function(data){
      var result = JSON.parse(data);
    });
    res.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });
  });

  x.end();
  console.log('done');
  var done = result;
});
