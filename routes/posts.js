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














module.exports = router