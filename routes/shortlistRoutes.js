const express = require('express');
const router = express.Router();
const { submitShortlist, getShortlists } = require('../controllers/shortlistController');

router.post('/', submitShortlist);
router.get('/', getShortlists);

module.exports = router;
