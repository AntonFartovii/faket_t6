import express from 'express'
import { faker } from '@faker-js/faker'
import exphbs from 'express-handlebars'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import path from 'path'
const url = import.meta.url
const __filename = fileURLToPath(url)
const __dirname = dirname(__filename)
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

const app = express()

const PORT = process.env.PORT || 8000

app.use(express.static('app'))

app.get('/', (req, res) => {
    res.status(200)
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen( PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

