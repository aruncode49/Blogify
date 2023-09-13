const express = require("express");
const router = express.Router();

const { addNewPost } = require("../controllers/blogController");

// Get -> /blog/add-new
router.get("/add-new", (req, res) => {
  return res.render("add-new");
});

// post -> /blog/add-new
router.post("/add-new", addNewPost);

module.exports = router;
