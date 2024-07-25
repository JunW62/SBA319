const express = require("express");
const app = express();
app.use(express.json());

require("dotenv").config();

const PORT = process.env.PORT;

const conn = require("./db/conn");
conn();

const cosmeticsRoute = require("./routes/cosmeticsRoute");
const householdEssentialsRoute = require("./routes/householdEssentialsRoute");
const foodsRoute = require("./routes/foodsRoute");

app.use("/api/cosmetics", cosmeticsRoute);
app.use("/api/household", householdEssentialsRoute);
app.use("/api/foods", foodsRoute);

app.get("/", (req, res) => {
  res.send("Home Route");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
