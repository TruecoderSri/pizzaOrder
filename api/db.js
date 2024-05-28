const mongoose = require("mongoose");
const mongoURL = process.env.MONGO_URL;
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongo DB Connected");
});
db.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

module.exports = mongoose;
