import express from 'express'
import db from '../dbConnection.js'

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await db.collection('users').findOne({ user_name: username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Here you would normally check the password
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // If login is successful, return user data (excluding password)
    const { password: _, ...userData } = user;
    res.json(userData);
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
