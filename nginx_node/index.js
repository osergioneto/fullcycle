const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const { Sequelize } = require('sequelize')
const { People } = require("./models/index")
const { v4: uuidv4 } = require('uuid')

app.use(bodyParser.urlencoded());
app.use(bodyParser.json())

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const people = await People.findAll()
    res.render('pages/index', { people: people })
})

app.post('/', async (req, res) => {
    await People.create({ id: uuidv4(), name: req.body.name })
    const people = await People.findAll()
    res.render('pages/index', { people: people })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})