const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const port = process.env.PORT || 5000;

const fresherJobs = require('./Data/fresher-job.json');
const experiencedJobs = require('./Data/experienced-jobs.json');

app.get('/', (req, res) => {
    res.send('JobLink Server Running');
});

app.get('/fresher-jobs', (req, res) => {
    res.send(fresherJobs);
});

app.get('/experiencedJobs', (req, res) => {
    res.send(experiencedJobs);
});


app.listen(port, () => {
    console.log('JobLink is running on port:', port);
});