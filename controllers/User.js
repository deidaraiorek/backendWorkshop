const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const { nickname, funFact } = req.body;
    const newUser = await User.create({ nickname, funFact });
    res.status(201).json({ message: 'User created successfully', data: newUser });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error: error.message });
  }
};

const getRandomUser = async (req, res) => {
    try {
      const randomUser = await User.aggregate([{ $sample: { size: 1 } }]);
      if (randomUser.length === 0) {
        return res.status(404).json({ message: 'No users found' });
      }
      res.status(200).json({ message: 'Random user fetched successfully', data: randomUser[0] });
    } catch (error) {
      res.status(400).json({ message: 'Error fetching random user', error: error.message });
    }
  };
  
module.exports = {
    createUser,
    getRandomUser
  };
  