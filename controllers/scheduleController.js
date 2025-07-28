const pool = require("../db");

exports.getAllSchedules = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM schedules");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSchedule = async (req, res) => {
  const { candidate_name, role, time, date } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO schedules (candidate_name, role, time, date) VALUES ($1, $2, $3, $4) RETURNING *",
      [candidate_name, role, time, date]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
