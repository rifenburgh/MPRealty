const mongoose          = require('mongoose');
const Schema            = mongoose.Schema;

const photoSchema       = new Schema({
  filename:             String,
  listingId:            String,
  url:                  String,
  caption:              String
});

const Photo             = mongoose.model('Photo', photoSchema);
module.exports          = Photo;
