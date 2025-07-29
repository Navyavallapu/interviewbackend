const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express(); // ✅ First declare app

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const dashboardRoutes = require('./routes/dashboardRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const interviewerRoutes = require('./routes/interviewerRoutes');
const shortlistRoutes = require('./routes/shortlistRoutes');

// Use Routes
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/feedbacks', feedbackRoutes);
app.use('/api/interviewers', interviewerRoutes);
app.use('/api/shortlist', shortlistRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
