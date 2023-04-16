const mongoose = require("mongoose");
var mongoURL =
  "mongodb+srv://pizzeria:27eb6K1Q4ljI9S0q@cluster0.hptzrhv.mongodb.net/mern-pizza";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongo DB Connected");
});
db.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

module.exports = mongoose;
