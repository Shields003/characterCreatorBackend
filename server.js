const express = require("express");
const app = express();
const { PORT, DEV_MODE, MONGODB } = require("./CONSTANTS");
const mongoose = require("mongoose");

const path = require("path");
const cors = require("cors");
const character_routes = require("./routes/character_routes");

//checks for dev mode then turns on cors if its true
app.use(
  "*",
  DEV_MODE
    ? cors()
    : (req, res, next) => {
        next();
      }
);

//this serves the files in the build path if found.
app.use(express.static(path.join(__dirname, "build")));

//THIS IS WHERE YOU CHANGE STUFF TO ADD ROUTES //////////////////

app.use("/character", character_routes);

////////////////////////////////////////////////////////////////

app.get("*", (req, res) => {
  res.status(404).send("Route Does Not Exist...Idiot.");
});

//Connects to the mongodb database
mongoose.connect(MONGODB, {
  useNewUrlParser: "true",
});
//if the mongodb errors out for any reason it throws this error
mongoose.connection.on("error", (err) => {
  console.log("err", err);
});

//once the connection is established to the mongodb server it runs this
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
});

//starts the express app listening (This does NOT mean that mongoose is connected)
