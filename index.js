const express = require('express');
const app = express();
const port = 5001;
const bodyparser = require('body-parser');

const config = require('./config/key');

const { User } = require('./models/User');
//application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }));
//application/json
app.use(bodyparser.json());

const mongoose = require('mongoose');
mongoose
  .connect(config.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!민기');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
