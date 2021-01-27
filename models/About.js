const mongoose = require('mongoose');

const AboutSchema = mongoose.Schema({
  catchphrase: {
    type: String,
    required: true,
  },
  main: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('About', AboutSchema, 'about');
