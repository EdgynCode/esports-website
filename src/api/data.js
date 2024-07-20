import { createClient } from '@vercel/postgres';

export async function fetchLeagueData() {
  const client = createClient();
  await client.connect();
  
  try {
    const data = await sql`SELECT * FROM "CONTRACT"`;
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
