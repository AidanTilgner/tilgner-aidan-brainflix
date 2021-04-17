const { json } = require('express');
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const PORT = 8080;

//GET from /videos -> all videos
app.get('/videos', (req, res) => {
    let videos = fs.readFileSync('./data/videos.json', 'utf8', (err, data) => {
        return data;
    })
    res.send(videos)
})

//GET from /videos/:id -> video that matches id
app.get('/videos/:id', (req, res) => {
    let videoDetails = JSON.parse(fs.readFileSync('./data/video-details.json', 'utf8', (err, data) => {
        return data;
    })).find(video => video.id === req.params.id)
    res.send(JSON.stringify(videoDetails))
})

//POST to /videos -> video object with title and description from user and
//add dummy channel and thumbnail
app.post('/videos', jsonParser, (req, res) => {
    console.log(req.body)
    let newVideo = req.body;
    newVideo.id = Math.random().toString(20).substr(2, 12);
    newVideo.channel = 'New Guy';
    let videos = JSON.parse(fs.readFileSync('./data/videos.json'))
    videos.push(newVideo);
    fs.writeFileSync('./data/videos.json', JSON.stringify(videos), err => console.log(err));
    res.send(videos);
})



app.listen(PORT, () => console.log(`Running on port ${PORT}`))

//notes:

//I tried outsourcing the routes to files and then running the use keyword but it 
//wasn't working so I'll come back to that

