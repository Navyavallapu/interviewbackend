const pool = require("../db");

exports.submitFeedback = async (req, res) => {
  const { candidate_name, interviewer_name, comments, rating } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO feedbacks (candidate_name, interviewer_name, comments, rating) VALUES ($1, $2, $3, $4) RETURNING *",
      [candidate_name, interviewer_name, comments, rating]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFeedback = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM feedbacks");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
