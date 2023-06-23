require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var travelRouter = require('./app_server/routes/travel');
var newsRouter = require('./app_server/routes/news');
var aboutRouter = require("./app_server/routes/about");
var contactRouter = require("./app_server/routes/contact");
var mealsRouter = require("./app_server/routes/meals");
var roomsRouter = require("./app_server/routes/rooms");
var databaseDB = require("./app_api/database/db");
var apiRouter = require('./app_api/routes/index');
var passport = require('passport');

require('./app_api/database/db');
require('./app_api/config/passport');

// I defined hbs variable, as it is used in line 27 and without
// defining it, npm did not run and gave this error: ReferenceError: hbs is not defined
const hbs = require('hbs');
const { UnauthorizedError } = require('express-jwt');

const app = express();

// view engine setup *
app.set('views', path.join(__dirname, 'app_server','views'));
app.set('view engine', 'hbs');

// register handlebars partials (https://www.npmjs.com/package/hbs)
hbs.registerPartials(path.join(__dirname, 'app_server',
'views/partials'));

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

// allow CORS
app.use("/api", (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);
app.use('/news', newsRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/meals", mealsRouter);
app.use("/rooms", roomsRouter);
app.use('/api', apiRouter );

// added using StackOverflow
// const expressHbs = require('express-handlebars');
// app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
// app.set('view engine', '.hbs');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res
    .status(400)
    .json({"message": err.name + ": " + err.message});
  }
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

// allow CORS
app.use('api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200L');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

module.exports = app;
