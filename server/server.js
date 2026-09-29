import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import pool from './config/database.js'

const publicDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
const page = (name) => path.join(publicDir, name)

const app = express()

// index: false so "/" is handled below instead of being auto-served
app.use(express.static(publicDir, { index: false }))

app.get('/', (req, res) => {
  res.sendFile(page('index.html'))
})

app.get('/bosses', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM bosses ORDER BY id')
  res.json(rows)
})

app.get('/bosses/:slug', async (req, res) => {
  const { rows } = await pool.query('SELECT 1 FROM bosses WHERE slug = $1', [
    req.params.slug.toLowerCase()
  ])

  if (!rows.length) return res.status(404).sendFile(page('404.html'))

  res.sendFile(page('boss.html'))
})

app.use((req, res) => {
  res.status(404).sendFile(page('404.html'))
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Something went wrong' })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`🚀 Server listening on http://localhost:${PORT}`))
