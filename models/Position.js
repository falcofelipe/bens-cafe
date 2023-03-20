const mongoose = require('mongoose');

const PositionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  venue: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Venue',
    required: true,
  },
  type: {
    type: String,
    default: 'full-time',
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Position', PositionSchema);
