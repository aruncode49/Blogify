const jwt = require("jsonwebtoken");

const createTokenForUser = (user) => {
  try {
    const payload = {
      _id: user._id,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY);
    return token;
  } catch (error) {
    console.log(`Error inside the createTokenforUser in auth.js ${error}`);
  }
};

// middleware -> verifyToken
const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies["token"];

    if (token) {
      const payload = jwt.verify(token, process.env.SECRET_KEY);

      req.userId = payload._id;
      next();
    } else {
      throw Error("Unauthorized Access");
    }
  } catch (error) {
    console.log(`Error inside verifyToken in auth.js: ${error}`);
  }
};

module.exports = {
  createTokenForUser,
  verifyToken,
};
