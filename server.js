const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

const appName = process.env.APP_NAME;

app.use(express.static(path.join(__dirname, "client", "dist")));

app.get("/test", (req, res) => {
  console.log(`Test route hit from ${appName}`);
  res.json({ message: `Hello from ${appName}` });
});

app.get("*", (req, res) => {
  console.log(`Serving from ${appName}`);
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
