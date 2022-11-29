require("dotenv").config();
const EXPRESS = require("express");
const APP = EXPRESS();
const CORS = require("cors");
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;
const PATH = require("path");
const MONGOOSE = require("mongoose");
const LEARNER_ROUTER = require("./learnerRouter.js");
const ROUTER = EXPRESS.Router();

APP.use(EXPRESS.json());
APP.use(CORS());
APP.use("/", LEARNER_ROUTES);

MONGOOSE.connect(MONGO_URL, {useNewUrlParser: true}).then(() => {
  console.log(`Mongoose Connection Successful`)}).catch((err) => {
  console.log(`Mongoose Connection Failed:\n${err}`)});

const CONNECTION = MONGOOSE.connection;

CONNECTION.once("open", function(){
  console.log(`Mongoose Connected to Database`)
});

APP.use(EXPRESS.static(PATH.resolve9__dirname, "../client"))));
APP.get("*", (req, res) => {
  res.sendFile(PATH.resolve(__dirname, "../client", "index.html"))
});

let SERVER = APP.listen(PORT, (err) => {
  if(err){
    console.log(err);
  } else {
    console.log(`Listening on Port ${PORT}`)
  }
});

module.exports = SERVER;
