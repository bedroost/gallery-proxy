const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

const port = process.env.PORT || 3000;

app.use('/rooms/:listingid', express.static(path.join(__dirname)));

app.get('/api/:listingid/images', (req, res) => {
  axios.get(`http://ec2-54-215-150-88.us-west-1.compute.amazonaws.com/api/${req.params.listingid}/images`)
    .then((response)=> {
      res.send(response.data);
    });
});

app.get('/api/:listingid/reviews', (req, res) => {
  axios.get(`http://ec2-13-57-195-146.us-west-1.compute.amazonaws.com/api/${req.params.listingid}/reviews`)
    .then((response) => {
      res.send(response.data);
    });
});

app.get('/api/:listingid/booking', (req, res) => {
  axios.get(`http://ec2-13-52-61-34.us-west-1.compute.amazonaws.com/api/${req.params.listingid}/booking`)
    .then((response)=> {
      res.send(response.data);
    });
});

app.listen(port, () => { console.log(`Listening on port ${port}`); });