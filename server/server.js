import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import bosses from './bosses.js'

const publicDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
const page = (name) => path.join(publicDir, name)

const app = express()

// index: false so "/" is handled below instead of being auto-served
app.use(express.static(publicDir, { index: false }))

app.get('/', (req, res) => {
  res.sendFile(page('index.html'))
})

app.get('/bosses', (req, res) => {
  res.json(bosses)
})

app.get('/bosses/:slug', (req, res) => {
  const boss = bosses.find(b => b.slug === req.params.slug.toLowerCase())
  if (!boss) return res.status(404).sendFile(page('404.html'))

  res.sendFile(page('boss.html'))
})

app.use((req, res) => {
  res.status(404).sendFile(page('404.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`🚀 Server listening on http://localhost:${PORT}`))
