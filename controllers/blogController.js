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

module.exports = {
  addNewPost,
  getBlogById,
};
