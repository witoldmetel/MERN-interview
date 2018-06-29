const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB Config
const db = require('./config/keys').mongodb;

// DB Connect
mongoose.connect(db)
    .then(() => console.log("DB Connect"))
    .catch(err => console.log(err));

// Port Server
const port = process.env.PORT || 3030;

app.listen(port, () => console.log('Server started'));
