require('dotenv').config()

const express = require("express")
const route = require('./routes')

const bodyParser = require('body-parser');
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(route)


module.exports = app;