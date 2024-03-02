const client = require('./db');

module.exports = async (req, res) => {
  try {
    // Example query to retrieve data
    const result = await client.query('SELECT * FROM "CONTRACT"');

    // Send the retrieved data as JSON response
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error executing SQL query:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};
