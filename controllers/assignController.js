const pool = require('../db');

const submitAssign = async (req, res) => {
  try {
    const { candidate_name, interviewer_name, date, time } = req.body;

    const result = await pool.query(
      'INSERT INTO assign (candidate_name, interviewer_name, date, time) VALUES ($1, $2, $3, $4) RETURNING *',
      [candidate_name, interviewer_name, date, time]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error assigning:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAssignments = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM assign ORDER BY id DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching assignments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { submitAssign, getAssignments };
