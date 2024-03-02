const { Pool } = require('pg');

// Connection string format: postgres://username:password@host:port/database
const connectionString = process.env.POSTGRES_URL_NO_SSL

// Create a PostgreSQL connection pool with the connection string
const pool = new Pool({
  connectionString: connectionString
});

// Example query to retrieve data
const query = 'SELECT * FROM "CONTRACT"';

// Use the pool to execute the query
pool.query(query, (err, res) => {
  if (err) {
    console.error('Error executing query', err);
    return;
}
  
  // Process the query results
  console.log(res.rows);
});

// Close the pool when done
pool.end();
