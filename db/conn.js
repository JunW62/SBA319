const mongoose = require("mongoose");

const conn = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    mongoose.connection.once("open", () => {
      console.log("Connected to MongoDB");
    });
  } catch (err) {
    console.error(
      `Something went wrong with the connect to the database ${err.message}`
    );
  }
};
module.exports = conn;
