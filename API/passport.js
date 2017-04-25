//Passport-Local Strategy
const LocalStrategy     = require('passport-local').Strategy;
const Username          = require('../models/user-model');
const bcrypt            = require('bcrypt');

module.exports          = function (passport) {
  passport.use(new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, foundUser) => {
      if (err) {
        next(err);
        return;
      }
      if (!foundUser) {
        next(null, false, { message: 'Incorrect Username' });
        return;
      }
      if (null, foundUser);
    });
  }));

  passport.serializeUser((loggedInUser, callback) => {
    callback(null, loggedInUser._id);
  });

  passport.deserializeUser((userIdFromSession, cb) => {
    User.findById(userIdFromSession, (err, userDocument) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, userDocument);
    });
  });
};
