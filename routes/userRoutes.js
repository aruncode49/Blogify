const express = require("express");

// import controller functions
const { signupPost, loginPost } = require("../controllers/userController");

const router = express.Router();

// signup -> Get
router.get("/signup", (req, res) => {
  return res.render("signup");
});

// login -> Get
router.get("/login", (req, res) => {
  return res.render("login");
});

// signup -> Post
router.post("/signup", signupPost);

// login -> Post
router.post("/login", loginPost);

// dashboard -> Get
router.get("/dashboard", (req, res) => {
  return res.render("dashboard");
});

module.exports = router;
