import pool from './database.js'
import bosses from './bosses.js'

const schema = `
  DROP TABLE IF EXISTS bosses;

  CREATE TABLE bosses (
    id          SERIAL PRIMARY KEY,
    slug        VARCHAR(50) UNIQUE NOT NULL,
    name        VARCHAR(100) NOT NULL,
    location    VARCHAR(100) NOT NULL,
    health      INTEGER NOT NULL,
    reward      VARCHAR(100) NOT NULL,
    image       TEXT NOT NULL,
    description TEXT NOT NULL
  );
`

const insert = `
  INSERT INTO bosses (slug, name, location, health, reward, image, description)
  VALUES ($1, $2, $3, $4, $5, $6, $7)
`

const reset = async () => {
  await pool.query(schema)

  for (const boss of bosses) {
    await pool.query(insert, [
      boss.slug,
      boss.name,
      boss.location,
      boss.health,
      boss.reward,
      boss.image,
      boss.description
    ])
  }

  console.log(`Seeded ${bosses.length} bosses`)
  await pool.end()
}

reset()
