const express           = require('express');
const mongoose          = require('mongoose');
const router            = express.Router();
const bodyParser        = require('body-parser');
const passport          = require('passport');
const bcrypt            = require('bcrypt');
const bcryptSalt        = 10;
const Listing           = require('../models/listing-model');
const Schedule          = require('../models/schedule-model');
const User              = require('../models/user-model');
const Photo             = require('../models/photo-model');


//Return all of the Featured Homes
router.get('/listing', (req, res, next) => {
  Listing.find((err, items) => {
    if(err) {
      res.json(err);
      return;
    }
    console.log(items);
    res.json(items);
  });
});

//Return all of the Featured Homes
router.get('/currentlisting', (req, res, next) => {
  Listing.find((err, items) => {
    if(err) {
      res.json(err);
      return;
    }
    console.log(items);
    res.json(items);
  });
});

//Delete Featured Home
//            featureddelete
router.get('/featureddelete/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified ID is Not valid.' });
  }
  Listing.remove({ _id: req.params.id }, (err) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json({ message: 'This Featured Listing has been removed.' });
  });
});

//List all of the Existing Schedule Contact Requests
//Should only be available post-login
router.get('/schedulelist', (req, res, next) => {
  //NEEDS Schedule Model Defined
  Schedule.find((err, items) => {
    if(err) {
      res.json(err);
      return;
    }
    console.log(items);
    res.json(items);
  });
});



//Create a new Featured Listing
router.post('/newlisting', (req, res, next) => {
  console.log("api/newlisting: ", req.body.price);
  const newItem           = new Listing({
    area:                 req.body.area,
    price:                req.body.price,
    street_addresss:      req.body.street_address,
    city:                 req.body.city,
    state:                req.body.state,
    zip:                  req.body.zip,
    style:                req.body.style,
    age:                  req.body.age,
    age_desc:             req.body.age_desc,
    bedrooms:             req.body.bedrooms,
    bathrooms:            req.body.bathrooms,
    water:                req.body.water,
    heat:                 req.body.heat,
    assessment:           req.body.assessment,
    mls:                  req.body.mls,
    sqft:                 req.body.sqft,
    photos:               req.body.photos,
    virtual_tour:         req.body.virtual_tour,
    end_listing:          req.body.end_listing
  });
  newItem.save((err) => {
    if(err) {
      res.status(400).json({ message: "Something went wrong."});
    } else {
      res.status(200).json(newItem);
    }
  });
});

//Create a new Schedule Request Item
router.post('/schedulenew', (req, res, next) => {
  const newItem           = new Schedule({
    name:                 req.body.name,
    phone:                req.body.phone,
    email:                req.body.email,
    message:              req.body.message,
    bestime:              req.body.besttime,
    timeline:             req.body.timeline
  });
  newItem.save((err) => {
    if(err) {
      res.status(400).json({ message: "Something went wrong." });
    } else {
      res.status(200).json(newItem);
    }
  });
});

router.post('/addimage/:id', (req, res, next) => {
  const newItem           = new Listing({
    img:                  req.body.image
  });
  console.log(req.body.image);
  console.log(newItem.img);
});

// USER AUTHENTICATION Starts




router.post('/signup', (req, res, next) => {
  console.log('signup ', req.body.username);

  const username          = req.body.username;
  const password          = req.body.password;
  //All Captured Details from Login/Signup page

  if (!username || !password) {
    res.status(400).json({ message: "Provide Username and Password." });
    return;
  }
  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: "The Username already exists." });
      return;
    }
    const salt             = bcrypt.genSaltSync(bcryptSalt);
    const hashPass         = bcrypt.hashSync(password, salt);
    const newUser          = User({
      username,
      password: hashPass,
      //Capture Details from Login/Signup page
    });
    newUser.save((err) => {
      if (err) {
        res.status(400).json({ message: "Something went wrong while creating your Username." });
      } else {
        req.login(newUser, function(err) {
          if (err) {
            return res.status(500).json({ message: "Something went wrong." });
          }
          res.status(200).json(req.user);
        });
      }
    });
  });
});

//LOGIN

router.post("/login", function (req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }

    // if (!user) { return res.status(401).json(info); }

    req.login(user, function(err) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: 'something went wrong :('
        });
      }
      console.log('SESSSSSSIIIIIOOOOOON', req.session);
      res.status(200).json(req.user);
    });
  })(req, res, next);
});


/* ES6
router.post('/login', (req, res, next) => {
  console.log('login ', user);
  passport(authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    req.login(user, (err) => {
      if (err) {
        console.log('Error logging in ', err);
        return res.status(500).json({ message: 'Error Logging In.' });
      }
      req.status(200).json(req.user);
    });
  }))(req, res, next);
});
*/


//LOGOUT
router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Successful Logout.' });
});

//Test is User is Logged In OR Not
router.get('/private', (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ message: 'User is Successfully Logged In.' });
  }
  return res.status(403).json({ message: 'User is NOT Logged In. '});
});
// USER AUTHENTICATION Ends

module.exports  = router;
