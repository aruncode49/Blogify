const express = require("express");
const router = express.Router();

// import controller functions
const {
  signupPost,
  loginPost,
  getDashboard,
  logOutHandler,
} = require("../controllers/userController");
const { verifyToken } = require("../service/auth");

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
router.get("/dashboard/:id", verifyToken, getDashboard);

// logout -> post
router.post("/logout", verifyToken, logOutHandler);

module.exports = router;
