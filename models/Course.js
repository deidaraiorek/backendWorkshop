const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
//   studentsEnrolled: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Student'
//   }]
});

module.exports = mongoose.model('Course', courseSchema);
