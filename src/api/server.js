const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Configure PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL ,
})

// Use CORS middleware
// app.use(cors({
//   origin: "https://esports-database.vercel.app"
// }));

app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM "CONTRACT"`);
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
