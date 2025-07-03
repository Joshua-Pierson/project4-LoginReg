import express from 'express'
import db from '../dbConnection.js'

const router = express.Router();

router.get('/', async (req, res) => {
  console.log ("Category Router, List Category ...")
  try {
    const categories = await db.query("SELECT * FROM login_reg_db.categories");
    console.log (categories[0])
    res.json(categories[0]); // Assuming categories is an array of objects
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).send("Server error while fetching categories");
  }
});

export default router;
