const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8080
const { Sequelize } = require('sequelize')
const { People } = require("./models/index")

app.use(bodyParser.urlencoded());
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})