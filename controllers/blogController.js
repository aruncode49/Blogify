const Blog = require("../models/blogModel");

const addNewPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    await Blog.create({
      title,
      description,
      createdBy: req.userId,
    });
    return res.status(201).redirect(`/user/dashboard/${req.userId}`);
  } catch (error) {
    console.log(`Error inside the addNewPost Controller: ${error}`);
  }
};

// getBlogById
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
    return res.render("getBlog", {
      blog: blog,
    });
  } catch (error) {
    console.log(`Error inside getBlogById: ${error}`);
  }
};

// getEditPageById
const getEditPageById = async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
    return res.render("editBlog", {
      blog: blog,
    });
  } catch (error) {
    console.log(`Error inside getEditPageById: ${error}`);
  }
};

// editPostById
const editPostById = async (req, res) => {
  try {
    const { title, description } = req.body;
    const blog = await Blog.findByIdAndUpdate(req.params.id, {
      title: title,
      description: description,
    });
    return res.redirect(`/user/dashboard/${blog.createdBy}`);
  } catch (error) {
    console.log(`Error inside editPostById: ${error}`);
  }
};

// deletePostById
const deletePostById = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    return res.redirect(`/user/dashboard/${blog.createdBy}`);
  } catch (error) {
    console.log(`Error inside deletePostById: ${error}`);
  }
};

// editBlogById

module.exports = {
  addNewPost,
  getBlogById,
  getEditPageById,
  editPostById,
  deletePostById,
};
