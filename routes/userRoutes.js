const express = require("express");

const router = express.Router();

// signup -> Get
router.get("/signup", (req, res) => {
  return res.render("signup");
});

// login -> Get
router.get("/login", (req, res) => {
    return res.render("login");
  });

module.exports = router;
