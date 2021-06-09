const compression = require('compression')
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

const port = process.env.PORT || 3000;

app.use(compression({ filter: shouldCompress }));

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
  // fallback to standard filter function
  return compression.filter(req, res)
}

app.use('/rooms/:listingid', express.static(path.join(__dirname)));

app.get('/api/:listingid/images', (req, res) => {
  axios.get(`http://ec2-54-215-150-88.us-west-1.compute.amazonaws.com/api/${req.params.listingid}/images`)
    .then((response) => {
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
    .then((response) => {
      res.send(response.data);
    });
});

app.get('/listing/desc/:listingid', (req, res) => {
  axios.get(`http://18.221.218.103/listing/desc/${req.params.listingid}`)
    .then((response) => {
      res.send(response.data)
    })
});

app.get('/listing/amenity/:listingid', (req, res) => {
  axios.get(`http://18.221.218.103/listing/amenity/${req.params.listingid}`)
    .then((response) => {
      res.send(response.data)
    })
})

app.listen(port, () => { console.log(`Listening on port ${port}`); });