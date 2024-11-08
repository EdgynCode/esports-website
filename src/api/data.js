import { createPool } from "@vercel/postgres";

const pool = createPool({
  connectionString:
    "postgres://default:9M7XGZAsjJYf@ep-sweet-fire-a4ltm0p5-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
});

export async function fetchLeagueData() {
  try {
    const data = await pool.sql`SELECT * FROM LeagueContract`;
    console.log("Data fetch completed.");
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch league data.");
  }
}
