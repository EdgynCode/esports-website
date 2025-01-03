import { createPool } from "@vercel/postgres";

const pool = createPool({
  connectionString:
    "postgres://default:9M7XGZAsjJYf@ep-sweet-fire-a4ltm0p5-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
});

export async function fetchLeagueContractData() {
  try {
    const data = await pool.sql`SELECT * FROM LeagueContract`;
    console.log("Data fetch completed.");
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch league data.");
  }
}

export async function fetchVCTTeamInfo(regionCode) {
  try {
    const data = await pool.sql`
      SELECT "TEAMNAME" as "teamName", "IMAGEURL" as "imageUrl"
      FROM "TEAMS" 
      INNER JOIN "PARTICIPATE" ON "TEAMS"."TEAMID" = "PARTICIPATE"."TEAMID"
      WHERE "PARTICIPATE"."LEAGUEID" = ${regionCode}`;
    console.log("Data fetch completed.");
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch team data.");
  }
}
