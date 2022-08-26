const express = require('express')
const app = express()
const router = express.Router()
const User = require('../models/user.models')

app.use(express.json())

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.send('Err: ' + err)
    }
})







module.exports = router