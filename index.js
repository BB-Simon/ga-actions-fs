const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "Server is healthy",
    timestamp: new Date().toISOString(),
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
