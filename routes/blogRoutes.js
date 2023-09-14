const express = require("express");
const router = express.Router();

const {
  addNewPost,
  getBlogById,
  getEditPageById,
  editPostById,
} = require("../controllers/blogController");

// Get -> /blog/add-new
router.get("/add-new", (req, res) => {
  return res.render("add-new");
});

// post -> /blog/add-new
router.post("/add-new", addNewPost);

// Get -> blog/:id
router.get("/:id", getBlogById);

// Get -> Edit Page
router.get("/edit/:id", getEditPageById);

// Patch -> blog/edit/:id
router.patch("/edit/:id", editPostById);

module.exports = router;
