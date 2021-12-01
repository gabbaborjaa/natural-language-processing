const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const port = 9000
const app = express()
const API_Key = process.env.API_Key

app.use(express.static('dist'))


console.log(__dirname)

app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
});

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
});

// designates what port the app will listen to for incoming requests
const server = app.listen(9000, function() {
    console.log(`You're running on ${port}`)
    console.log(`Your API Key is ${API_Key}`)
});
// API Fetch Call
app.post('/userText', async(req, res) => {
    console.log('req.body ===+>', req.body)
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1key=${API_Key}&url=${req.body.formText}&lang=en`);
    try {
        const data = await response.json();
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log("error", error);
    }
});