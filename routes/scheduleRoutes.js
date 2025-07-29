const express = require('express');
const router = express.Router();
const pool = require('../db');

const {
  addSchedule,
  getAllSchedules,
} = require('../controllers/scheduleController');

// Route to add a schedule
router.post('/', addSchedule);

// Route to get all schedules
router.get('/', getAllSchedules);

module.exports = router;
