const Course = require('../models/Course'); 

const createCourse = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCourse = await Course.create({ name, description });
    res.status(201).json({ message: 'Course created successfully', data: newCourse });
  } catch (error) {
    res.status(400).json({ message: 'Error creating course', error: error.message });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({ message: 'Courses fetched successfully', data: courses });
  } catch (error) {
    res.status(400).json({ message: 'Error fetching courses', error: error.message });
  }
};

module.exports = {
    createCourse,
    getAllCourses
}