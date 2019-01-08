const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  longLat: {
    type: Array,
    required: true
  },
  days: {
      type: [String],
      enum: ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"],
      required: true
    },
  startTime: {
    type: Number,
    required: true,
    min: 0,
    max: 24
  },
  endTime: {
    type: Number,
    required: true,
    min: 0,
    max: 24
  },
  menu: {
    type: Object
  },
  imageUrl: {
    type: String,
    required: true,
    default: "https://img.icons8.com/metro/1600/bar.png"
  }
})

module.exports = Business = mongoose.model('businesses', BusinessSchema);