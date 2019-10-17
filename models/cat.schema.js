const mongoose = require('mongoose');
const { Schema } = mongoose;

const catSchema = new Schema({
  name: String,
  race: String,
  color: String
});

module.exports = mongoose.model('cats', catSchema);