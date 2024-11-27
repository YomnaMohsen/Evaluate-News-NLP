const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv');


const app = express()

// uising middlewares
app.use(express.static('dist'))
app.use(express.json());
app.use(cors());
// for using environment variables
dotenv.config();

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
