# Backend Development Workshop

This guide is designed to help beginners understand the basics of setting up a backend server using Node.js, Express, and MongoDB. Throughout this workshop, you'll learn how to create a simple application that can serve as a foundation for more complex projects.

![MERN Logo](https://webimages.mongodb.com/_com_assets/cms/lsuggzv1y2g4km8s0-mernstack-framework.png?ixlib=js-3.7.1&auto=format%2Ccompress&w=1946)

## Getting Started

Before diving into the code, make sure you have the following prerequisites installed and set up:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: You'll need a MongoDB database. You can set up a free MongoDB database at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Installation

Follow these steps to get your development environment set up:

1. **Clone the repository**: Clone this repository to your local machine using `git clone <repository-url>`.
2. **Install dependencies**: Navigate to the project directory in your terminal and run `npm install` to install the required dependencies.
3. **Set up environment variables**: Create a `.env` file in the root directory of your project. Add your MongoDB connection string as `MONGO_URI=<your_mongodb_uri_here>`.
4. **Start the server**: Run `npm start` to start the Express server. Your server should now be running and connected to MongoDB.

## Project Structure

Here's an overview of the key files and directories in this project:

- `index.js`: The entry point of the application. This file sets up the Express server and connects to MongoDB.
- `package.json`: Contains metadata about the project and lists its dependencies.
- `config/`: Contains configuration files, including the database connection setup.
- `models/`: Contains Mongoose models that define the schemas for your database collections.
- `routes/`: Contains Express routers that define the API endpoints for your application.
- `controllers/`: Contains the logic for handling requests to your API endpoints.

## Building Your First API

This workshop will guide you through building a simple API with the following endpoints:

- **Create User**: A POST endpoint that allows for creating a new user in the database.
- **Get Random User**: A GET endpoint that retrieves a random user from the database.

### Defining Models

You will start by defining a `User` model in the `models/` directory. This model will represent users in your application.

### Creating Controllers

Next, create controllers for user-related actions. You will implement functions for creating a user and fetching a random user.

### Setting Up Routes

Define routes for user-related actions. You will set up routes that handle POST requests for creating a user and GET requests for fetching a random user.

### Running Your API

Ensure your Express application uses the defined routes, and start your server with `npm start`. You can then use tools like Postman to test your API endpoints.

Congratulations! You've set up a basic backend application with Node.js, Express, and MongoDB. This workshop covers the fundamentals to get you started on backend development. Explore further by adding more features, models, and routes to your application.
