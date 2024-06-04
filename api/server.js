const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const db = require("./db.js");
const PizzaRoute = require("./routes/pizzaRoutes");
const orderRoute = require("./routes/orderRoute");

app.use(express.json());
app.use(cors({
  origin: '*', // Allow access from anywhere
  credentials: true,
  optionsSuccessStatus: 200,
  allowedHeaders: '*'
}));

app.use("/api/pizzas", PizzaRoute);
app.use("/api/orders", orderRoute);

const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.send("Server Working on port " + port);
});

app.listen(port, "0.0.0.0", () => console.log("Server running on port " + port));
