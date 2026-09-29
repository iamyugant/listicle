import 'dotenv/config'
import pg from 'pg'

const { DATABASE_URL } = process.env

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is not set. Copy server/.env.example to server/.env and fill it in.')
}

const pool = new pg.Pool({
  connectionString: DATABASE_URL,
  // Render only accepts SSL connections; a local server usually has none.
  ssl: DATABASE_URL.includes('localhost') ? false : { rejectUnauthorized: false }
})

export default pool
