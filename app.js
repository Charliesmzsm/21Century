var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var loginRouter= require('./routes/login');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter= require('./routes/register');
var searchRouter= require('./routes/search');
var pageRouter= require('./routes/page');
var updateRouter=require('./routes/update');
var novelcRouter=require('./routes/novel-craete');
var writerlRouter=require('./routes/wriiter-login');
var writerrRouter=require('./routes/writer-register');
var authorbRouter=require('./routes/author-book');
var readerbRouter=require('./routes/reader-book');
var addRouter=require('./routes/add');
var bookRouter=require('./routes/book');
var addbRouter=require('./routes/add_book');
var deletebRouter=require('./routes/delete_book');
var getcommentRouter=require('./routes/getcomment');
var put_commentRouter=require('./routes/put_comment');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public',express.static(path.join(__dirname,'public')));

app.use('/login', loginRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/search', searchRouter);
app.use('/page', pageRouter);
app.use('/update',updateRouter);
app.use('/writer-register',writerrRouter);
app.use('/writer-login',writerlRouter);
app.use('/author-book',authorbRouter);
app.use('/reader-book',readerbRouter);
app.use('/novel-create',novelcRouter);
app.use('/add',addRouter);
app.use('/book',bookRouter);
app.use('/add_book',addbRouter);
app.use('/delete_book',deletebRouter);
app.use('/getcomment',getcommentRouter);
app.use('/put_comment',put_commentRouter);


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
