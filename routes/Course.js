const express = require('express');
const CourseRouter = express.Router();
const {createCourse, getAllCourses } = require('../controllers/Course'); 

CourseRouter.post('/create', createCourse);
CourseRouter.get('/', getAllCourses);

module.exports = CourseRouter;
