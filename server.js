const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

const appName = process.env.APP_NAME;

app.use(express.static(path.join(__dirname, "client", "dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  console.log(`Serving from ${appName}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
