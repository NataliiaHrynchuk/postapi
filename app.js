const express = require('express');

const { router } = require('./router');

const app = express();

// app.use('/', (req, res, next) => {
//     console.log('Hello from middleware');
//     next();
// });

// app.use('/', (req, res, next) => {
//     console.log('Hello from middleware2');
//     next();
//  })

app.use('/', router);

module.exports = {
    app,
};
