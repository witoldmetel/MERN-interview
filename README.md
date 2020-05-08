# MERN (Interview Task)

MERN Todo app
Technologies used: React, Redux, Reactstrap, Node.js, Express, MongoDB

## Quick Start

``` bash
# Install dependencies for server side
npm install

# Serve on localhost:3030 (Server side)
npm run server

# Install dependencies for client side
npm run client-install

# Serve on localhost:3000 (Client side)
npm run client

# Serve the both side
npm run dev

# Deploy on heroku
npm run heroku-postbuild
```

In config folder you need to add your MondoDB URI key:

``` bash
module.exports = {
    mongoDBURI: '<YOUR_MONGODB_URI_KEY'
};
```

Helper: https://github.com/justinhaaheim/nested-task-list-mobx-react
