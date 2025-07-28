const pool = require("../db");

exports.getAllInterviewers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM interviewers");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const result = await pool.query(
      "UPDATE interviewers SET status = $1 WHERE id = $2 RETURNING *",
      [status, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
