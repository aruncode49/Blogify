const jwt = require("jsonwebtoken");

const createTokenForUser = (user) => {
  try {
    const payload = {
      userId: user._id,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY);
    return token;
  } catch (error) {
    console.log(`Error inside the createTokenforUser in auth.js ${error}`);
  }
};

module.exports = {
  createTokenForUser,
};
