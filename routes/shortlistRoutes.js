const express = require("express");
const router = express.Router();
const {
  markShortlist,
  getShortlist,
} = require("../controllers/shortlistController");

router.post("/", markShortlist);
router.get("/", getShortlist);

module.exports = router;
