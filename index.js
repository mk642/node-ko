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
  res.send('Hello World!!mingi');
});

app.post('/register', (req, res) => {
  //회원가입할떄 필요한 정보들을 클라이언트에서 가져오면
  //그것들을 데이터 베이스에 넣어준다 .

  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
