const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')


const routerTasks = require('./routes/tasks')

const dbUrl = 'mongodb://localhost:27017/test'
const app = express()
const PORT = 3000

mongoose.Promise = Promise
mongoose.connect(dbUrl)

app.locals.moment = require('moment')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../client')))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))

app.use('/tasks', routerTasks)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
