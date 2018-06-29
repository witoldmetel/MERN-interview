const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoDBURI;

// DB Connect
mongoose.connect(db)
    .then(() => console.log("MongoDB Connect"))
    .catch(err => console.log(err));

// Port Server
const port = process.env.PORT || 3030;

app.listen(port, () => console.log('Server started'));
