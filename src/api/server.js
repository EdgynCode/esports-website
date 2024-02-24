import { db } from "@vercel/postgres";
require('dotenv').config();

export default async function handler(request, response) {
    const client = db.connect({
        POSTGRES_URL: process.env.POSTGRES_URL,
    });
    try {
        const result = await client.sql`SELECT * FROM "CONTRACT"`;
        return response.status(200).json({ result });
    }
    catch (error) {
        return response.status(500).json({ error });
    }
}
