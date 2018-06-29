const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const todos = require('./schema/todos');

const app = express();

// Bodyparser
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoDBURI;

// DB Connect
mongoose.connect(db)
    .then(() => console.log("MongoDB Connect"))
    .catch(err => console.log(err));

// Use API Route (endpoint, refs)
app.use('/todos', todos);

// Port Server define
const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server started, port ${port}`));
