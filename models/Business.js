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
  vibe: {
    type: String,
    enum: ["Red", "Black", "White"],
    required: true
  },
  longLat: {
    type: Array,
    required: true
  }
})

module.exports = Business = mongoose.model('businesses', BusinessSchema);