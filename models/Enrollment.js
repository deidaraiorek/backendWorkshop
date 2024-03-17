const mongoose = require('mongoose');

const participationSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Enrollment', participationSchema);
