const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    massive = require('massive'),
    config = require('../config.js'),
    app = express();

app.use(bodyParser.json());
app.use(cors());

massive(config.connectionString).then(db => {
    app.set('db', db);
})

app.get('/api/getShelfData', (req, res) => {
    let shelfLetter = req.query.letter;
    if (shelfLetter === "A") {
        return req.app.get('db').getShelfA().then(shelf => {
            res.status(200).send(shelf);
        })
    }
    if (shelfLetter === "B") {
        return req.app.get('db').getShelfB().then(shelf => {
            res.status(200).send(shelf);
        })
    }
    if (shelfLetter === "C") {
        return req.app.get('db').getShelfC().then(shelf => {
            res.status(200).send(shelf);
        })
    }
    if (shelfLetter === "D") {
        return req.app.get('db').getShelfD().then(shelf => {
            res.status(200).send(shelf);
        })
    }
})

const port = 3002;
app.listen(port, console.log(`Reporting for duty on ${port}`));