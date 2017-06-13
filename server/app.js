const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://ingelieur:tsubasa@ds127391.mlab.com:27391/house-selling')

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const houses = require('./routes/houses')
app.use('/houses', houses)

app.listen(3000)
