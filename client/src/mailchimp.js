const mc = require('@mailchimp/mailchimp_marketing');
const axios = require('axios');
const API_KEY = require('../../mailchimpAPI.js');

mc.setConfig({
  apiKey: API_KEY,
  server: 'us2',
});

const addContact = async (req, res) => {
  const listId = "7caa13b333";
  const postData = {
    "email_address": `${req.body.email}`,
    "status": "subscribed",
    "merge_fields": {}
  };

  const axiosConfig = {
    headers: {
      'authorization': `Basic ${API_KEY}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  try {
    let mcResponse = await axios.post('https://us2.api.mailchimp.com/3.0/lists/7caa13b333/members', postData, axiosConfig)
    console.log("Mailchimp List Response: ", mcResponse);
    res.send('Mailchimp has been updated');

  } catch (err) {
    console.log("Mailchimp Error: ", err);
    res.send(err);
  }
};

module.exports = addContact;
