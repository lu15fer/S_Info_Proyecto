var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
//ContraseñaMongo: develcurso 1z5XB8t5XGiWJ9Ez
mongoose.connect('mongodb+srv://Developer:dios9876@ingsoft-7bzyg.gcp.mongodb.net/autosdb?retryWrites=true&w=majority',
	{useNewUrlParser: true}).then(
	() => {
		console.log('Conectado a Mongo');
	}
	);




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var galeriaRouter = require('./routes/galerias');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/galerias', galeriaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
