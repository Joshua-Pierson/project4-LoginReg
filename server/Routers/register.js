import express from 'express'
import db from '../dbConnection.js'

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await db.collection('users').findOne({ user_name: username });

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const newUser = {
      user_name: username,
      password: password
    };

    await db.collection('users').insertOne(newUser);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
