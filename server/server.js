import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import itemsRouter from './routes/items.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, 'public')

const app = express()

// index: false so "/" goes through the route below rather than auto-serving index.html
app.use(express.static(publicDir, { index: false }))
app.use('/bosses', itemsRouter)

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(publicDir, 'index.html'))
})

// Anything that didn't match a route above
app.use((req, res) => {
  res.status(404).sendFile(path.join(publicDir, '404.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
