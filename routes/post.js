const express = require('express')
const app = express()
const router = express.Router()
const Post = require('../models/post.models')

app.use(express.json())


router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.send('Err: ' + err)
    }
})


router.post('/', async (req, res) => {
    const post = new Post({
        userId: req.body.userId,
        date: req.body.date,
        time: req.body.time,
        title: req.body.title,
        body: req.body.body

    })

    try {
        const response = await post.save()
        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
})














module.exports = router