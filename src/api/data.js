import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function fetchLeagueData() {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM "CONTRACT"');
    console.log('Data fetch completed.');
    return res.rows;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch league data.');
  }
  finally {
    client.release();
  }
}
