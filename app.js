const express = require("express");
const path = require("path");

const app = express();

// Serve static files (HTML, CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(3000, () => {
  console.log("Furniture Store running at http://localhost:3000");
})