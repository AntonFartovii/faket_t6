import express from 'express'
import exphbs from 'express-handlebars'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const url = import.meta.url
const __filename = fileURLToPath(url)
const __dirname = dirname(__filename)

import {homeRoutes} from './src/routes/home.js'

const app = express()

const PORT = process.env.PORT || 8000

const hbs = exphbs.create({
    defaultLayout:'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs')

app.use(express.static('app'))
app.get('/', homeRoutes )

app.listen( PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

