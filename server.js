const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const postData = require('./db/query.js');
const addContact = require('./client/src/mailchimp.js');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3003;
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/dist')));
app.use(cors());

app.post('/data', postData)

app.post('/mailchimp', addContact)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log('WMM server is listening on port 3003');
  });
}