require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const connectMongoDB = require("./service/db");
const { verifyToken } = require("./service/auth");

const app = express();
const PORT = process.env.PORT || 3000;

// connect mongodb
connectMongoDB();

// serve static files
app.use(express.static("public"));

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method"));

// set view engine
app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
  return res.render("home");
});

app.use("/user", userRoutes);
app.use("/blog", verifyToken, blogRoutes);

// port listening
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
