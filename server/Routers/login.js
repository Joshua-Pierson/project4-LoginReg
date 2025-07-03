import express from 'express'
import db from '../dbConnection.js'

const router = express.Router();

router.post('/', async (req, res) => {
  console.log("Login request received");
  const { user_name, password_hash } = req.body;

  try {
    const [result] = await db.query("SELECT * from login_reg_db.login where user_name = ? and password_hash = ?", [user_name, password_hash]);
    console.log(result);
    res.status(200).send(result[0])
    //res.status(200).json(result);
  }
  catch (err) {
    res.status(500).send("Server error while listing user", err);
  }
})

export default router;