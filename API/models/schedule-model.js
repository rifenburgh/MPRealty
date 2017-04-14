const mongoose          = require('mongoose');
const Schema            = mongoose.Schema;

const scheduleSchema    = new Schema({
  name:                 String,
  phone:                String,
  email:                String,
  message:              String,
  besttime:             String,
  timeline:             String
});

const Schedule          = mongoose.model('Schedule', scheduleSchema);
module.exports          = Schedule;
