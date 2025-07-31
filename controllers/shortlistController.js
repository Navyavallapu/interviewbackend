const pool = require('../db'); // ✅ Import your DB pool

const submitShortlist = async (req, res) => {
  try {
    console.log("Received Body:", req.body);

    const { candidate_name, status } = req.body;

    const result = await pool.query(
      'INSERT INTO shortlist (candidate_name, status) VALUES ($1, $2) RETURNING *',
      [candidate_name, status]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error submitting shortlist:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getShortlists = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM shortlist ORDER BY id DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching shortlists:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { submitShortlist, getShortlists };
