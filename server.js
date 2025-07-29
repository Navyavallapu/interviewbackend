const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const dashboardRoutes = require('./routes/dashboardRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const shortlistRoutes = require('./routes/shortlistRoutes');
const assignRoutes = require('./routes/assignRoutes'); // ✅ Assign route added

// Use Routes
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/feedbacks', feedbackRoutes);
app.use('/api/shortlist', shortlistRoutes);
app.use('/api/assign', assignRoutes); // ✅ Register assign API route

// Root route - Fixes "Cannot GET /"
app.get('/', (req, res) => {
  res.send('API is running ✅');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
