const pool = require('../db');

// GET /api/interviewers
const getInterviewers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM interviewers');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching interviewers:', err);
    res.status(500).json({ error: 'Failed to get interviewers' });
  }
};

module.exports = { getInterviewers };
