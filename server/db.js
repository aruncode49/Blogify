const mongoose = require("mongoose");
const { MONGODB_URI } = require("../config");

function connectMongoDB() {
  mongoose
    .connect(MONGODB_URI)
    .then((val) => console.log("MongoDB Connected"))
    .catch((err) => console.log("Error in connection: ", err));
}

module.exports = connectMongoDB;
