import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import pg from 'pg'

// Relative to this file, so the server runs from any working directory
dotenv.config({ path: path.join(path.dirname(fileURLToPath(import.meta.url)), '../.env') })

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
