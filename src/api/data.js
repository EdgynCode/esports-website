import { createPool } from '@vercel/postgres';

const pool = createPool({
  connectionString: process.env.POSTGRES_URL,
});

export async function fetchLeagueData() {
  try {
    const data = await pool.sqlSELECT * FROM "CONTRACT";
    console.log('Data fetch completed.');
    return data.rows;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch league data.');
  }
}
