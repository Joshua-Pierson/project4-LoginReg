import express from 'express'
import db from '../dbConnection.js'

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const categories = await db.collection('categories').find().toArray();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;