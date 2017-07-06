
// const path = require('path');
const friends = require('../data/friend.js');
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: 'application/vnd.api+json',
}));





module.exports = router;