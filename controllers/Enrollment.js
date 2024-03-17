const Enrollment = require('../models/Enrollment'); 

const enrollUser = async (req, res) => {
  try {
    const { course, student } = req.body;
    const newEnrollment = await Enrollment.create({ course, student });
    res.status(201).json({ message: 'User enrolled in course successfully', data: newEnrollment });
  } catch (error) {
    res.status(400).json({ message: 'Error enrolling user in course', error: error.message });
  }
};


const getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find().populate('student', 'nickname').populate('course', 'name');
    res.status(200).json({ message: 'Enrollments fetched successfully', data: enrollments });
  } catch (error) {
    res.status(400).json({ message: 'Error fetching enrollments', error: error.message });
  }
};

module.exports = {
  enrollUser,
  getAllEnrollments
};
