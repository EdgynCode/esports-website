import { sql } from '@vercel/postgres';
import dotenv from 'dotenv';

dotenv.config();

export async function fetchLeagueData() {
  try {
    const data = await sql`SELECT * FROM "CONTRACT"`;
    console.log('Data fetch completed.');
    return data.rows;
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch league data.');
  }
}
