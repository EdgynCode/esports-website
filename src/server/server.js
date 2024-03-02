const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

// Configure PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'global-contract-database',
  password: 'edgyn',
  port: 5555,
});

// Use CORS middleware
app.use(cors({
  origin: "http://localhost:3000"
}));

app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "CONTRACT"');
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});