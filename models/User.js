const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true, 
  },
  funFact: {
    type: String,
    required: false, 
  }
});

module.exports = mongoose.model('User', userSchema);
