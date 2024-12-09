import { createPool } from "@vercel/postgres";
import fs from "fs";
import csv from "csv-parser";

const pool = createPool({
  connectionString:
    "postgres://default:9M7XGZAsjJYf@ep-sweet-fire-a4ltm0p5-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
});

const importCSV = async () => {
  const client = await pool.connect();
  try {
    const rows = [];
    fs.createReadStream("Data.csv")
      .pipe(
        csv({
          mapHeaders: ({ header }) => header.trim().toUpperCase(),
        })
      )
      .on("data", (row) => {
        console.log("Row:", row);
        rows.push(row);
      })
      .on("end", async () => {
        for (const { TEAMID, LEAGUEID, TEAMCODE } of rows) {
          await client.query(
            `INSERT INTO "PARTICIPATE" ("TEAMID", "LEAGUEID", "TEAMCODE") VALUES ($1, $2, $3)`,
            [TEAMID, LEAGUEID, TEAMCODE]
          );
        }
        console.log("Import complete");
      });
  } catch (err) {
    console.error(err);
  } finally {
    client.release();
  }
};

importCSV();
