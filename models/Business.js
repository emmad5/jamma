const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  address: {
    type: String,
    required: true
  },
  longLat: {
    type: Array,
    required: true
  },
  vibe: {
    type: String,
    enum: ["Red", "Black", "White"],
    required: true
  },
  days: {
      type: Array,
      required: true
    },
  startTime: {
    type: number,
    required: true
  },
  endTime: {
    type: number,
    required: true
  },
  menu: {
    type: Object,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true
  }
})

module.exports = Business = mongoose.model('businesses', BusinessSchema);