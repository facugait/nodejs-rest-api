const mongoose = require('mongoose');
const { Schema } = mongoose;

const dogSchema = new Schema({
  name: String,
  race: String,
  color: String
});

module.exports = mongoose.model('dogs', dogSchema);