const submitShortlist = async (req, res) => {
  try {
    console.log("Received Body:", req.body); // Add this to check input

    const { candidate_name, status } = req.body;

    const result = await pool.query(
      'INSERT INTO shortlist (candidate_name, status) VALUES ($1, $2) RETURNING *',
      [candidate_name, status]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error submitting shortlist:', error.message); // Show exact error
    res.status(500).json({ error: 'Internal server error' });
  }
};
