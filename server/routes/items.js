import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import listData from '../data/listdata.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// GET /bosses -> all bosses as JSON
router.get('/', (req, res) => {
  res.status(200).json(listData)
})

// GET /bosses/:slug -> detail page, or 404 if no boss matches
router.get('/:slug', (req, res) => {
  const boss = listData.find(b => b.slug === req.params.slug.toLowerCase())

  if (!boss) {
    return res.status(404).sendFile(path.resolve(__dirname, '../public/404.html'))
  }

  res.status(200).sendFile(path.resolve(__dirname, '../public/item.html'))
})

export default router
