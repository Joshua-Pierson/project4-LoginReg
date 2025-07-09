import express from 'express';
import cors from 'cors';
import db from './dbConnection.js';
import loginroute from './Routers/login.js';
import registerroute from './Routers/register.js';
import categoryroute from './Routers/categories.js';
import questionroute from './Routers/questions.js';
import path from 'path';
// Add and import your route files here, Example:
// import yourRoute from './Routers/yourRoute.js'

const app = express();
app.use(express.static(path.join(process.cwd(), 'client/build')));

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

app.use(express.static(path.join(process.cwd(), 'client/build')));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

