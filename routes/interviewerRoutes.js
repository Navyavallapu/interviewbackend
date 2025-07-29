const express = require('express');
const router = express.Router();
const { getInterviewers } = require('../controllers/interviewerController');

// GET /api/interviewers
router.get('/', getInterviewers);

module.exports = router;
