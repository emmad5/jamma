const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusinessSchema = newSchema({
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
  },
  happyHourStart: {
    type: Date,
    required: true
  },
  happyHourEnd: {
    type: Date,
    required: true
  }
})