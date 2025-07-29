const pool = require('../db');

const submitShortlist = async (req, res) => {
  try {
    const { candidate_name, status } = req.body;

    const result = await pool.query(
      'INSERT INTO shortlist (candidate_name, status) VALUES ($1, $2) RETURNING *',
      [candidate_name, status]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error submitting shortlist:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getShortlists = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM shortlist ORDER BY id DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching shortlists:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { submitShortlist, getShortlists };
