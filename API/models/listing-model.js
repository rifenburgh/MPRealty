
const mongoose          = require('mongoose');
const Schema            = mongoose.Schema;

const listingSchema     = new Schema({
  area:                 String,
  price:                Number,
  street_address:       String,
  city:                 String,
  state:                String,
  zip:                  String,
  style:                String,
  age:                  Number,
  age_desc:             String,
  bedrooms:             String,
  bathrooms:            String,
  water:                String,
  heat:                 String,
  assessment:           String,
  acreage:              String,
  mls:                  String,
  photos:               Boolean,
  virtual_tour:         Boolean,
  end_listing:          Date
});

const Listing           = mongoose.model('Listing', listingSchema);
module.exports          = Schedule;
