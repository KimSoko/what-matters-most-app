const express = require('express');
const cors = require('cors');
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log('SDC is listening on port 3000');
  });
}