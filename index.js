require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const connectMongoDB = require("./service/db");
const { verifyToken } = require("./service/auth");

const app = express();
const PORT = 3000 || process.env.PORT;

// connect mongodb
connectMongoDB();

// serve static files
app.use(express.static("public"));

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

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
