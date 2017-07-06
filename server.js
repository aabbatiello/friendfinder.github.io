// Dependencies NODE PACKAGES TO INSTALL
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


// Create instance of express app.
var app = express();

// Specify the port.
var PORT = process.env.PORT || 3306;


// Sets up the Express app to handle data parsingapp.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

app.use(express.static(path.join(__dirname, './app/public')));
app.use(require('./app/routing/apiRoutes.js'));
app.use(require('./app/routing/htmlRoutes.js'))


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});