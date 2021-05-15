const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3003;
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/dist')));
app.use(cors());

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log('WMM is listening on port 3003');
  });
}