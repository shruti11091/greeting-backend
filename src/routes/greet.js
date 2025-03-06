const express = require("express");
const Greet = require("../models/Greet.js"); // ✅ Use require() instead of import

const router = express.Router();

router.get("/greet", (req, res) => {
  const { name } = req.query;
  const response = Greet.getMessage(name);
  res.json(response);
});

module.exports = router; // ✅ Use module.exports
