const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("PowerPlatform App is running like a company project!");
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(5000, () => {
  console.log("App running on port 5000");
});
