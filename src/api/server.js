require('dotenv').config();
const { Client } = require('@vercel/postgres');

async function fetchData() {
    const client = new Client({
        connectionString: process.env.POSTGRES_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    });
    try {
        await client.connect();
        const res = await client.query('SELECT "LEAGUES"."LEAGUEID" AS League, "TEAMS"."TEAMNAME" AS Team, "MEMBERS"."INGAMENAME" AS SummonerName, "MEMBERS"."POSITION" AS Position, "MEMBERS"."NAME" AS Name, "MEMBERS"."FIRSTNAME" AS FirstName, "NATIONS"."NATIONCODE" AS Nationality, "MEMBERS"."CONTRACTENDDATE" AS EndDate, "MEMBERS"."RESIDENCY" AS Residency, "MEMBERS"."STATUS" AS Status, "TEAMS"."TEAMCODE" AS Tricode, "TEAMS"."TEAMCONTACT" AS TeamContact FROM "LEAGUES" JOIN "PARTICIPATE" ON "LEAGUES"."LEAGUEID" = "PARTICIPATE"."LEAGUEID" JOIN "TEAMS" ON "PARTICIPATE"."TEAMID" = "TEAMS"."TEAMID" JOIN "PLAY" ON "TEAMS"."TEAMID" = "PLAY"."TEAMID" JOIN "MEMBERS" ON "PLAY"."PLAYERID" = "MEMBERS"."PLAYERID" JOIN "HAS_NATIONALITY" ON "MEMBERS"."PLAYERID" = "HAS_NATIONALITY"."PLAYERID" JOIN "NATIONS" ON "HAS_NATIONALITY"."NATIONCODE" = "NATIONS"."NATIONCODE";');
        return res.rows;
    } catch (err) {
        console.error(err);
        return [];
    } finally {
        await client.end();
    }
}
