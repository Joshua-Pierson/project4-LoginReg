import express from 'express';
import cors from 'cors';
import db from './dbConnection.js';
import loginroute from './Routers/login.js';
import registerroute from './Routers/register.js';
import categoryroute from './Routers/categories.js';
import questionroute from './Routers/questions.js';
// Add and import your route files here, Example:
// import yourRoute from './Routers/yourRoute.js'

const app = express();

app.use(express.json());  // To parse JSON bodies in requests
app.use(cors(({
  origin: 'http://localhost:3000',         // To allow requests from all origins (good for development)
})));

app.use('/login', loginroute);
app.use('/register', registerroute);
app.use('/categories', categoryroute);
app.use('/questions', questionroute);


// Add your route handlers here, Example:
// app.use('/your-endpoint', yourRoute)

app.get('/', (req, res) => {
  res.send("Server running");
});

app.listen(4000, () => {
  console.log("Listening at http://localhost:4000");
});