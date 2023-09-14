const bcrypt = require("bcrypt");

const User = require("../models/userModel");
const Blog = require("../models/blogModel");
const { createTokenForUser } = require("../service/auth");

// signup -> Post Controller
const signupPost = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    password = hashedPassword;

    // insert data in db
    await User.create({ name, email, password });

    return res.status(201).redirect("/user/login");
  } catch (error) {
    console.log("Error in signup Post controller: ", error);
  }
};

// login -> Post Controller
const loginPost = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user from email
    const user = await User.findOne({ email });

    if (user) {
      // match password
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (isPasswordMatch) {
        // crete json web token

        const token = createTokenForUser(user);
        res.cookie("token", token);

        return res.redirect(`/user/dashboard/${user._id}`);
      }
      throw Error("Please enter correct password!");
    }
    throw Error("Invalid email address!");
  } catch (error) {
    console.log(`Errors in login post controller : ${error}`);
  }
};

// Dashboard -> Get Controller
const getDashboard = async (req, res) => {
  try {
    const allBlogs = await Blog.find({ createdBy: req.params.id });
    return res.render("dashboard", {
      allBlogs: allBlogs,
    });
  } catch (error) {
    console.log(`Error in getDashboard controller: ${error}`);
  }
};

const logOutHandler = (req, res) => {
  const loggedInUser = req.userId;
  return res.clearCookie("token").redirect("/user/login");
};

module.exports = {
  signupPost,
  loginPost,
  getDashboard,
  logOutHandler,
};
