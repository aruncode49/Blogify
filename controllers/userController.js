const bcrypt = require("bcrypt");

const User = require("../models/userModel");

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

module.exports = {
  signupPost,
};
