const express = require("express");
const UserRouter = express.Router();

const { createUser, getRandomUser } = require("../controllers/User");

UserRouter.post("/create", createUser);
UserRouter.get("/random", getRandomUser);

module.exports = UserRouter;
