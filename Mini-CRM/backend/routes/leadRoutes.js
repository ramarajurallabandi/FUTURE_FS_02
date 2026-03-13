const express = require("express");
const Lead = require("../models/Lead");

const router = express.Router();

// Save a new lead
router.post("/", async (req, res) => {
  const lead = new Lead(req.body);
  await lead.save();
  res.json({ message: "Lead saved" });
});

// Get all leads
router.get("/", async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

module.exports = router;
// DELETE lead using GET (for browser testing)
router.delete("/:id", async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);
  res.json({ message: "Lead deleted" });
});

