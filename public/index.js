const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

app.use('/rooms/:listingid', express.static(path.join(__dirname)));

app.get('/api/:listingid/images', (req, res) => {

});

app.get('/api/:listingid/reviews', (req, res) => {

});

app.get('/api/:listingid/booking', (req, res) => {

});

app.listen(port, () => { console.log(`Listening on port ${port}`); });