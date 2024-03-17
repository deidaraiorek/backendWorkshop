const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const UserRouter = require('./routes/User');
const CourseRouter = require('./routes/Course');
const EnrollmentRouter = require('./routes/Enrollment');
const PostRouter = require('./routes/Post');

// set up express server
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// set up routes
app.use('/user', UserRouter);
app.use('/course', CourseRouter);
app.use('/enrollment', EnrollmentRouter);
app.use('/post', PostRouter);

//connect to port
const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {

    // Connect to MongoDB
    await connectDB();

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
    
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error);
    process.exit(1);
  }
};

startServer();
