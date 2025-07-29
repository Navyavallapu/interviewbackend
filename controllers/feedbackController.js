const pool = require('../db');

// POST /api/feedbacks
const submitFeedback = async (req, res) => {
  const { candidate_name, interviewer, feedback } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO feedbacks (candidate_name, interviewer, feedback) VALUES ($1, $2, $3) RETURNING *',
      [candidate_name, interviewer, feedback]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error submitting feedback:', err);
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
};

module.exports = { submitFeedback };
