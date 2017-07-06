
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


//Here i need logic to examine my peanuts characters and determine based on the users responese which peanuts character there most alike



module.exports = router;