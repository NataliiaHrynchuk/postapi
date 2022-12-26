const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.end('This is get response');
    next();
});

router.post('/posts', (req, res, next) => {
    res.end('This is post response /posts');
    next();
});

module.exports = {
    router,
};