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



router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.send('Err: ' + err)
    }
})




router.post('/', async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        surName: req.body.surName,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        passWord: req.body.passWord,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    })

    try {
        const response = await user.save()
        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
})



router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const response = await user.remove()

        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
})




module.exports = router