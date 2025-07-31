const pool = require('../db');

// POST /api/schedules
const addSchedule = async (req, res) => {
  const { candidate_name, role, date, time } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO schedules(candidate_name, role, date, time) VALUES ($1, $2, $3, $4) RETURNING *',
      [candidate_name, role, date, time]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding schedule:', err.message);
    res.status(500).json({ error: 'Failed to add schedule' });
  }
};

// GET /api/schedules
const getAllSchedules = async (req, res) => {
  try {
     console.log("Received Body:", req.body);

    const result = await pool.query('SELECT * FROM schedules ORDER BY date, time');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching schedules:', err);
    res.status(500).json({ error: 'Failed to get schedules' });
  }
};

module.exports = {
  addSchedule,
  getAllSchedules,
};
