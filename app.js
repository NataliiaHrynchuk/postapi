const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const { router } = require('./router');

const app = express();
app.use(cors());
app.use(express.json());

// app.use('/', (req, res, next) => {
console.log('Hello from middleware');
//     next();
// });

// app.use('/', (req, res, next) => {
//     console.log('Hello from middleware2');
//     next();
//  })

app.use('/', router);
const tempDir = path.join(__dirname, 'temp');
console.log(tempDir);

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

app.post('/api/users', upload.single('image'), async (req, res) => {
  console.log('body', req.body);
  console.log('file', req.file);
});

module.exports = {
  app,
};
