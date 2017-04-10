const mongoose          = require('mongoose');
const Schema            = mongoose.Schema;

const testimonialSchema = new Schema({
  name:                 String,
  feedback:             String,
  created:              Date
});

const Testimonial       = mongoose.model('Testimonial', testimonialSchema);
module.exports          = Testimonial;
