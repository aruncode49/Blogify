const express = require("express");

const router = express.Router();

// Get -> /blog/add-new
router.get("/add-new", (req, res) => {
  return res.render("add-new");
});

module.exports = router;
