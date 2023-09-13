const express = require("express");

const router = express.Router();

// signup -> Get
router.get("/signup", (req, res) => {
  return res.render("signup");
});

module.exports = router;
