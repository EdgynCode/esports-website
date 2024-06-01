const { Pool } = require('pg');
// const cors = require('cors');
require('dotenv').config();

// Configure PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

// Use CORS middleware
// app.use(cors({
//   origin: "https://esports-database.vercel.app"
// }));

// app.get('/api/data', async (req, res) => {
//   try {
//     const result = await pool.query(`SELECT * FROM "CONTRACT"`);
//     res.setHeader('Content-Type', 'application/json');
//     res.json(result.rows);
//   } catch (error) {
//     console.error('Error executing query:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

module.exports = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`SELECT * FROM "CONTRACT"`);
    const results = { 'results': (result) ? result.rows : null};
    res.status(200).json(results);
    client.release();
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};