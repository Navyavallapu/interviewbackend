const pool = require("../db");

exports.markShortlist = async (req, res) => {
  const { candidate_name, status } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO shortlist (candidate_name, status) VALUES ($1, $2) RETURNING *",
      [candidate_name, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getShortlist = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM shortlist");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
