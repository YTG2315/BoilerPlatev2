'use strict';
const express    = require('express');
const bodyParser = require('body-parser');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const bcrypt     = require('bcryptjs');
const app        = express();

app.get('/', (req, res) => {
  res.send('Server is running');
});

fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUp3rpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log(hash);
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log(res);
  });
});

//END_ASYNC

//START_SYNC

//END_SYNC

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
