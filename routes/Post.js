const express = require("express");
const PostRouter = express.Router();

const { createPost, getAllPosts, getPostById } = require("../controllers/Post");

PostRouter.post("/create", createPost);
PostRouter.get("/get", getAllPosts);
PostRouter.get('/get/:id', getPostById)

module.exports = PostRouter;
