const express           = require('express');
const path              = require('path');
const favicon           = require('serve-favicon');
const logger            = require('morgan');
const cookieParser      = require('cookie-parser');
const bodyParser        = require('body-parser');
const layouts           = require('express-ejs-layouts');
const mongoose          = require('mongoose');
const dotenv            = require('dotenv');
const cors              = require('cors');
const passport          = require('passport');
const LocalStrategy     = require('passport-local').Strategy;
const session           = require('session');
const bcrypt            = require('bcrypt');
const Listing           = require('./models/listing-model');
const s3                = require('s3');
const multer            = require('multer'),
      fs                = require('fs'),
      S3FS              = require('s3fs'),
      s3fsImp           = new S3FS('mprealty', {
        accessKeyId:    'AKIAI7YGIIDKSYSMELOQ',
        secretAccessKey:process.env.S3SECRET
      });


dotenv.config();
mongoose.connect(process.env.MONGODB_URI);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'MP Realty';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
//Disable CORS in Production
if (process.env.NODE_ENV !== 'production') {
  app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200', 'http://localhost:8000']
  }));
}

//Setup S3 AWS Storage

var client  = s3.createClient({
  maxAsyncS3: 20,
  s3RetryCount: 3,
  s3RetryDelay: 1000,
  multipartUploadThreshold: 20971520,
  multipartUploadSize: 15728640,
  s3Options: {
    accesskeyId: "your s3 key",
    secretAccessKey: "Your S3 Secret"
  }
});


//END S3 AWS Storage Setup

// const index             = require('./routes/index');
// app.use('/', index);
const api               = require('./routes/api-routes');
app.use('/api', api);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
