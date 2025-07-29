const express = require('express');
const router = express.Router();
const { submitAssign, getAssignments } = require('../controllers/assignController');

router.post('/', submitAssign);
router.get('/', getAssignments);

module.exports = router;
