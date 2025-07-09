import express from 'express';
import cors from 'cors';
import db from './dbConnection.js';
import loginroute from './Routers/login.js';
import registerroute from './Routers/register.js';
import categoryroute from './Routers/categories.js';
import questionroute from './Routers/questions.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/login', loginroute);
app.use('/register', registerroute);
app.use('/categories', categoryroute);
app.use('/questions', questionroute);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

