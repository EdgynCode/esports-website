require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT "LEAGUES"."LEAGUEID" AS League, "TEAMS"."TEAMNAME" AS Team, "MEMBERS"."INGAMENAME" AS SummonerName, "MEMBERS"."POSITION" AS Position, "MEMBERS"."NAME" AS Name, "MEMBERS"."FIRSTNAME" AS FirstName, "NATIONS"."NATIONCODE" AS Nationality, "MEMBERS"."CONTRACTENDDATE" AS EndDate, "MEMBERS"."RESIDENCY" AS Residency, "MEMBERS"."STATUS" AS Status, "TEAMS"."TEAMCODE" AS Tricode, "TEAMS"."TEAMCONTACT" AS TeamContact FROM "LEAGUES" JOIN "PARTICIPATE" ON "LEAGUES"."LEAGUEID" = "PARTICIPATE"."LEAGUEID" JOIN "TEAMS" ON "PARTICIPATE"."TEAMID" = "TEAMS"."TEAMID" JOIN "PLAY" ON "TEAMS"."TEAMID" = "PLAY"."TEAMID" JOIN "MEMBERS" ON "PLAY"."PLAYERID" = "MEMBERS"."PLAYERID" JOIN "HAS_NATIONALITY" ON "MEMBERS"."PLAYERID" = "HAS_NATIONALITY"."PLAYERID" JOIN "NATIONS" ON "HAS_NATIONALITY"."NATIONCODE" = "NATIONS"."NATIONCODE";');
    const results = { 'results': (result) ? result.rows : null};
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}
