// controllers/dashboardController.js ✅
const pool = require('../db');

const getDashboardStats = async (req, res) => {
  try {
    const totalResult = await pool.query('SELECT COUNT(*) FROM schedules');
    const completedResult = await pool.query("SELECT COUNT(*) FROM schedules WHERE status = 'Completed'");
    const pendingResult = await pool.query("SELECT COUNT(*) FROM schedules WHERE status = 'Pending'");
    const shortlistedResult = await pool.query('SELECT COUNT(*) FROM shortlist');

    res.json({
      totalInterviews: parseInt(totalResult.rows[0].count),
      completed: parseInt(completedResult.rows[0].count),
      pending: parseInt(pendingResult.rows[0].count),
      shortlisted: parseInt(shortlistedResult.rows[0].count)
    });
  } catch (err) {
    console.error('Dashboard error:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getDashboardStats };
