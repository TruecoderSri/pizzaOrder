const mongoose = require("mongoose");
<<<<<<< HEAD
var mongoURL = process.env.MONGO_URL;
=======
const mongoURL = process.env.mongoURL;

>>>>>>> 031162901cac43b9bf577a203b1202eb8e1dd8f8
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongo DB Connected");
});
db.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

module.exports = mongoose;
