import express from "express";

const app = express();
const PORT = 3000 || process.env.PORT;

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello World");
});

// PORT LISTENING
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
