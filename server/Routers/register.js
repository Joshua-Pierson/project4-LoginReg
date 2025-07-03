import express from 'express'
import db from '../dbConnection.js'

const router = express.Router();

router.post('/', async (req, res) => {
  const { user_name, password_hash } = req.body;

  try {
    const [result] = await db.query ("INSERT INTO login_reg_db.login (user_name, password_hash) VALUES (?, ?)", [user_name, password_hash]) 
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error("Register user error:", error);
    res.status(500).send("Server error while adding user");
  }
})
export default router;

