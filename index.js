const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const port = process.env.PORT || 5000;

const fresherJobs = require('./Data/fresher-job.json');
const experiencedJobs = require('./Data/experienced-jobs.json');
const bdCompanies = require('./Data/BD-top-three.json');
const worldCompanies = require('./Data/world-top-three.json');

app.get('/', (req, res) => {
    res.send('JobLink Server Running');
});

app.get('/fresher-jobs', (req, res) => {
    res.send(fresherJobs);
});

app.get('/experiencedJobs', (req, res) => {
    res.send(experiencedJobs);
});
app.get('/bdCompanies', (req, res) => {
    res.send(bdCompanies);
});
app.get('/worldCompanies', (req, res) => {
    res.send(worldCompanies);
});


app.listen(port, () => {
    console.log('JobLink is running on port:', port);
});