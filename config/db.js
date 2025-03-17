const { Pool } = require("pg");
const { db } = require("../keys");

// Create a new pool instance with environment variables
const pool = new Pool({
  user: db.username, // Database username
  host: db.host, // Database host
  database: db.database, // Database name
  password: db.password, // Database password
  port: db.port, // Database port, default to 5432
});

const dbQuery = async (text, params) => {
  try {
    const start = Date.now(); // Track query execution time
    const result = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log("Executed query", { text, duration, rows: result.rowCount });
    return result;
  } catch (error) {
    console.error("Error executing query", { text, error });
    throw error; // Re-throw the error for higher-level handling
  }
};

module.exports = dbQuery;
