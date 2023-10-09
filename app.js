require("dotenv").config();
const express = require("express");
const router = require("./src/route");
const app = express();

app.use(express.json());
app.use("/file", router);

app.listen("5000", () => {
  console.log("Listening on port 5000");
});
