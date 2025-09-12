import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import dotenv from 'dotenv';

import path from 'path';

dotenv.config({ path: path.resolve('../.env') });

const app = express();
app.use(cors());
app.use(express.json()); // in case you want to parse JSON

const pool = new Pool({
  user: process.env.DB_USER,       // from .env
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME,   // from .env
  password: process.env.DB_PASS,   // from .env
  port: process.env.DB_PORT || 5432,
  max: 20,
});

const port = process.env.PORT || 8090;


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
