const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

app.use('/rooms/:listingid', express.static(path.join(__dirname)));

app.listen(port, () => { console.log(`Listening on port ${port}`); });