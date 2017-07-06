
const path = require('path');
const express = require('express');
const router = express.Router();


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
router.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

// Sends User to survey
router.('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});



module.exports = router;