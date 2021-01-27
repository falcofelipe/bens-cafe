const mongoose = require('mongoose');

const AboutSchema = mongoose.Schema({
  catch: {
    type: String,
    required: true,
  },
  main: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('About', AboutSchema);
