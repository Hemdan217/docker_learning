const express = require("express");

const app = express();
const port = 6777;

app.get("/", (req, res) => {
  res.send("Hello, World! ddd");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
