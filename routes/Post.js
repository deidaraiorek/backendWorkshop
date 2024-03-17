const express = require("express");
const PostRouter = express.Router();

const { createPost, getAllPosts } = require("../contdrollers/User");

PostRouter.post("/create", createPost);
PostRouter.get("/get", getAllPosts);

module.exports = UserRouter;
