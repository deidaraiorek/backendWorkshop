const express = require('express');
const CourseRouter = express.Router();
const {createCourse, getAllCourses } = require('../controllers/Course'); // Adjust the path as needed

CourseRouter.post('/', createCourse);
CourseRouter.get('/', getAllCourses);

module.exports = CourseRouter;
