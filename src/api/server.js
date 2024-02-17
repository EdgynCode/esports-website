require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();

// Configure PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Use CORS middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

app.get('/api/server', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT "LEAGUES"."LEAGUEID" AS League, "TEAMS"."TEAMNAME" AS Team, "MEMBERS"."INGAMENAME" AS SummonerName, "MEMBERS"."POSITION" AS Position, "MEMBERS"."NAME" AS Name, "MEMBERS"."FIRSTNAME" AS FirstName, "NATIONS"."NATIONCODE" AS Nationality, "MEMBERS"."CONTRACTENDDATE" AS EndDate, "MEMBERS"."RESIDENCY" AS Residency, "MEMBERS"."STATUS" AS Status, "TEAMS"."TEAMCODE" AS Tricode, "TEAMS"."TEAMCONTACT" AS TeamContact FROM "LEAGUES" JOIN "PARTICIPATE" ON "LEAGUES"."LEAGUEID" = "PARTICIPATE"."LEAGUEID" JOIN "TEAMS" ON "PARTICIPATE"."TEAMID" = "TEAMS"."TEAMID" JOIN "PLAY" ON "TEAMS"."TEAMID" = "PLAY"."TEAMID" JOIN "MEMBERS" ON "PLAY"."PLAYERID" = "MEMBERS"."PLAYERID" JOIN "HAS_NATIONALITY" ON "MEMBERS"."PLAYERID" = "HAS_NATIONALITY"."PLAYERID" JOIN "NATIONS" ON "HAS_NATIONALITY"."NATIONCODE" = "NATIONS"."NATIONCODE";');
    const results = { 'results': (result) ? result.rows : null};
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});