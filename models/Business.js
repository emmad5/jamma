const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: Text
  },
  address: {
    type: String,
    required: true
  },
  vibe: {
    type: String,
    required: true,
  }
})

module.exports = Business = mongoose.model('businesses', BusinessSchema);