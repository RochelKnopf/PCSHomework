var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret',
  /*cookie: {
    maxAge: 20000
  }*/
  resave: false,
  saveUninitialized: false
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.route('/register')
  .get((req, res, next) => {
    res.render('layout', { partials: { content: 'register' } });
  })
  .post(require('./register.js'));

app.post('/login', require('./login.js'));

app.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
});

/*app.use((req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/');
  }
});*/

function sessionOnlyMiddleware(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/');
  }
};

app.use('/admin', sessionOnlyMiddleware, (req, res, next) => {
  res.render('layout', { partials: { content: 'admin' } });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('layout', { partials: { content: 'error' } });
});

app.locals.appTitle = 'PCS Session App';
module.exports = app;
