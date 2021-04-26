const { json } = require('express');
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const cors = require('cors');
const { time } = require('console');
const PORT = 8080;

//enable cors for all
app.use(cors())

//GET from /videos -> all videos
app.get('/videos', (req, res) => {
    let videos = fs.readFileSync('./data/video-details.json', 'utf8', (err, data) => {
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
    console.log(`Someone posted ${req.body}`)
    let newVideo = {};
    newVideo.id = Math.random().toString(20).substr(2, 12);
    newVideo.title = req.body.title;
    newVideo.channel = 'New Guy';
    newVideo.image = 'http://localhost:8080/thumbnail/default';
    newVideo.description = req.body.description;
    newVideo.views = '1,200,740';
    newVideo.likes = '69,420';
    newVideo.duration = '2:47';
    newVideo.video = "Not that fancy yet"
    let time = new Date();
    newVideo.timestamp = time.getMilliseconds();
    newVideo.comments = 
    [{
        "name": "Aidan Tilgner",
        "comment": "This is a beautiful hard coded comment because so far Aidan is lazy",
        "id": "abdhgbeirbg-124u-nfwjbbbfsieurbf",
        "likes": "1,000,000",
        "timestamp": time.getMilliseconds()
    }]
    let videos = JSON.parse(fs.readFileSync('./data/video-details.json'))
    videos.push(newVideo);
    fs.writeFileSync('./data/video-details.json', JSON.stringify(videos), err => console.log(err));

    //post to video details as well 

    res.send(videos);
})

//send default thumbnail photo from server to front-end
app.get('/thumbnail/default', (req, res) => {
    res.sendFile('C:/Brainstation/tilgner-aidan-brainflix/sprint-three/server/assets/defaultThumbnail.jpg')
})

app.listen(PORT, () => console.log(`Running on port ${PORT}`))

//notes:

//I tried outsourcing the routes to files and then running the use keyword but it 
//wasn't working so I'll come back to that

