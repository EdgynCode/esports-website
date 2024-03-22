const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
const port = 5000;

// Load env from .env.development.local file
dotenv.config({ path: '.env.development.local' });

// Configure PostgreSQL connection
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  connectionString: process.env.POSTGRES_PRISMA_URL
});

// Use CORS middleware
app.use(cors({
  origin: "https://esports-website-eta.vercel.app"
}));

app.get('/api/server', async (req, res) => {
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