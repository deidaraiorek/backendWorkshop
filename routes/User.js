const express = require('express');
const UserRouter = express.Router();

const { createUser,
    getRandomUser } = require('../contdrollers/User');

UserRouter.post('/create', createUser);
UserRouter.get('/random', getRandomUser);

module.exports = UserRouter;
