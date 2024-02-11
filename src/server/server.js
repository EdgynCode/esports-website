const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

// Configure PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'global-contract-database',
  password: 'edgyn',
  port: 5555,
});

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT "LEAGUES"."LEAGUEID" AS League, "TEAMS"."TEAMNAME" AS Team, "MEMBERS"."INGAMENAME" AS SummonerName, "MEMBERS"."POSITION" AS Position, "MEMBERS"."NAME" AS Name, "MEMBERS"."FIRSTNAME" AS FirstName, "NATIONS"."NATIONCODE" AS Nationality, "MEMBERS"."CONTRACTENDDATE" AS EndDate, "MEMBERS"."RESIDENCY" AS Residency, "MEMBERS"."STATUS" AS Status, "TEAMS"."TEAMCODE" AS Tricode, "TEAMS"."TEAMCONTACT" AS TeamContact FROM "LEAGUES" JOIN "PARTICIPATE" ON "LEAGUES"."LEAGUEID" = "PARTICIPATE"."LEAGUEID" JOIN "TEAMS" ON "PARTICIPATE"."TEAMID" = "TEAMS"."TEAMID" JOIN "PLAY" ON "TEAMS"."TEAMID" = "PLAY"."TEAMID" JOIN "MEMBERS" ON "PLAY"."PLAYERID" = "MEMBERS"."PLAYERID" JOIN "HAS_NATIONALITY" ON "MEMBERS"."PLAYERID" = "HAS_NATIONALITY"."PLAYERID" JOIN "NATIONS" ON "HAS_NATIONALITY"."NATIONCODE" = "NATIONS"."NATIONCODE";');
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
