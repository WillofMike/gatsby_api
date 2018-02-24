const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const logger = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require("./routes")
const port = process.env.PORT || 8080;

if (process.env.MONGODB_URI) mongoose.connect(process.env.MONGODB_URI)
else mongoose.connect('mongodb://localhost/gatsbydb')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))



routes(app)

app.listen(port, () => {
  console.log('listening on: ',  port);
})
