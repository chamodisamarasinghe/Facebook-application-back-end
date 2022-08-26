const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/user')
const app = express()
const port = 4000

const url = 'mongodb://127.0.0.1/express'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

app.use(express.json())

con.on("open", () => {
    console.log('MongoDB connected!');
})

app.use('/users', user)







app.listen(port, () => {
    console.log(`app starting on ${port}`);
})