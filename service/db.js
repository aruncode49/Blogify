const mongoose = require("mongoose");

function connectMongoDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then((val) => console.log("MongoDB Connected"))
    .catch((err) => console.log("Error in connection: ", err));
}

module.exports = connectMongoDB;
