const express = require("express");

const userRoutes = require("./routes/user");

const app = express();
const PORT = 3000 || process.env.PORT;

// serve static files
app.use(express.static("public"));

// set view engine
app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
  return res.render("home");
});

app.use("/user", userRoutes);

// port listening
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
