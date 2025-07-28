const express = require("express");
const router = express.Router();
const {
  getAllInterviewers,
  updateStatus,
} = require("../controllers/interviewerController");

router.get("/", getAllInterviewers);
router.put("/:id/status", updateStatus);

module.exports = router;
