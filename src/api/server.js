const { db } = require('@vercel/postgres');

export const fetchLeagueData = async () => {
  try {
    const client = await db.connect();
    const data = await client.sql`SELECT * FROM "CONTRACT";`;
    return data.rows;
  }
  catch (error) {
    console.error('Error executing query:', error);
    throw new Error('Failed to fetch league data.');
  }
}