const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/videos', (req, res) => {
    let videos = fs.readFileSync('../data/videos.json', 'utf8', (err, data) => {
        return data;
    })
    res.send('hello I am working')
})

module.exports = router;