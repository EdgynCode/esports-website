import { createClient } from '@vercel/postgres';

export async function fetchLeagueData() {
  const connectionString = process.env.POSTGRES_URL_NON_POOLING;
  if (!connectionString) {
    throw new Error("Connection string is not defined.");
  }
  const client = createClient({ connectionString });
  await client.connect();
  
  try {
    const data = await client.sql`SELECT * FROM "CONTRACT"`;
    console.log('Data fetch completed.');
    return data.rows;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch league data.');
  }
  finally {
    await client.end();
  }
}
