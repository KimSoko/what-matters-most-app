const db = require('./index.js');
const helper = require('../client/src/helpers.js');

const postData = (req, res) => {
  let data = helper.formatForDB(req.body);

  let queryStr = `INSERT INTO results (topic, 1_name, 1_score, 2_name, 2_score, 3_name, 3_score, 4_name, 4_score, 5_name, 5_score, 6_name, 6_score, 7_name, 7_score) VALUES (${data.topic}, ${data['1_name']}, ${data['1_score']}, ${data['2_name']}, )${data['2_score']}, ${data['3_name']}, ${data['3_score']}, ${data['4_name']}, ${data['4_score']}, ${data['5_name']}, ${data['5_score']},  ${data['6_name']}, ${data['6_score']}, ${data['7_name']}, ${data['7_score']})`;
  db.query(queryStr, function(err, result) {
    if (err) {
      throw err;
    } else {
      console.log('Successful POST to db ', result);
      res.send(result);
    }
  });

};

module.exports = postData;