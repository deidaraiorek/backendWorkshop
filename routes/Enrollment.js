const express = require('express');
const EnrollmentRouter = express.Router();
const {  enrollUser,
    getAllEnrollments } = require('../controllers/Enrollment'); 

EnrollmentRouter.post('/', enrollUser);
EnrollmentRouter.get('/', getAllEnrollments);

module.exports = EnrollmentRouter;
