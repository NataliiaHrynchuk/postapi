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

router.get('/contact', (req, res) => {
  res.send('<h1>Contact page</h1>');
});

router.get('/contact/:id', (req, res) => {
  res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
});

module.exports = {
  router,
};
