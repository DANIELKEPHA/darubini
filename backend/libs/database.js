import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;

// Log the connection string for debugging
console.log("Connecting to database with URL:", process.env.DATABASE_URL);

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Always use SSL
});

// Test the connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("❌ Error connecting to the database:", err);
  } else {
    console.log("✅ Database connection successful:", res.rows[0]);
  }
});
