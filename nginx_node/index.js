const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8080
const { Sequelize } = require('sequelize')
const { People } = require("./models/index")
const { v4: uuidv4 } = require('uuid')

app.use(bodyParser.urlencoded());
app.use(bodyParser.json())

app.get('/', async (req, res) => {
    res.send(await People.findAll())
})

app.post('/', async (req, res) => {
    await People.create({ id: uuidv4(), name: req.body.name })
    res.send(await People.findAll())
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})