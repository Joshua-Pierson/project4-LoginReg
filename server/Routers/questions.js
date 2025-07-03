import express from 'express'
import db from '../dbConnection.js'

const router = express.Router();

router.get('/', async (req, res) => {
  console.log ("Questions Router, List Questions ...")
  try {
    const questions = await db.query("SELECT * FROM login_reg_db.questions");
    console.log (questions[0])
    res.json(questions[0]); // Assuming questions is an array of objects
  } catch (err) {
    console.error("Error fetching questions:", err);
    res.status(500).send("Server error while fetching questions");
  }
});

export default router;