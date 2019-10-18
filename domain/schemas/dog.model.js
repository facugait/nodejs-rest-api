const mongoose = require('mongoose');
const { Schema } = mongoose;

const dogSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('dogs', dogSchema);