const express = require('express');
const router = express.Router();
const { submitFeedback } = require('../controllers/feedbackController');
const pool = require('../db');

// POST /api/feedbacks
router.post('/', submitFeedback);

module.exports = router;

