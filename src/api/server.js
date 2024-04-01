/*
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
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
*/
const { db } = require('@vercel/postgres');

const client = await db.connect();
await client.sql`SELECT * FROM "CONTRACT"`;

export const getLeagueData = async (req, res) => {
  try {
    const client = await db.connect();
    const result = await db.sql`SELECT * FROM "CONTRACT"`;
    client.release();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ success: true, message: 'Data query successfully' });
  }
  catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}