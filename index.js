const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./routes/routes");
const bodyparser = require("body-parser");
const moongoose = require("mongoose");
const { default: mongoose } = require("mongoose");
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.json())

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("db connected successfully"))
  .catch((err) => console.log("Error while connected to the db", err));

app.use("/", router);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("Error while listening to the server");
  } else {
    console.log("Started listening to the server", process.env.PORT);
  }
});
