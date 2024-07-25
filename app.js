const express = require("express");
const app = express();
app.use(express.json());

const conn = require("./db/conn");
conn();

require("dotenv").config();
const Port = process.env.Port;

const cosmeticsRoute = require("./routes/cosmeticsRoute");

app.use("/api/cosmetics", cosmeticsRoute);

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
