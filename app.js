const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT;

const conn = require("./db/conn");
conn();

const cosmeticsRoute = require("./routes/cosmeticsRoute");

app.use("/api/cosmetics", cosmeticsRoute);

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
