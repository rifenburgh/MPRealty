const express           = require('express');
const mongoose          = require('mongoose');
const router            = express.Router();
const bodyParser        = require('body-parser');
const passport          = require('passport');
const bcrypt            = require('bcrypt');
const bcryptSalt        = 10;
const Listing           = require('../models/listing-model');
const Schedule          = require('../models/schedule-model');

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

//Create Test items
//::NOT FINISHED::
router.post('/listingnew', (req, res, next) => {
  const newItem         = new Listing({
    price:              123456,
    area:               "Downtown",
    sqft:               799
  });
  newItem.save((err) => {
    if(err) {
      res.status(400).json({ message: "Something went wrong." });
    }
      res.status(200).json(newItem);
  });
});

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

//Create a new Schedule Request Item
//Model Needed

//Create a new Featured Listing
router.post('/newlisting', (req, res, next) => {

  console.log("api/newListing: ", req.body.price);
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

module.exports  = router;
