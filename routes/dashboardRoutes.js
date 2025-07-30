const express = require('express');
const router = express.Router();

const { getDashboardStats } = require('../controllers/dashboardController');

// GET /api/dashboard → fetch all dashboard stats
router.get('/', getDashboardStats);

module.exports = router;
