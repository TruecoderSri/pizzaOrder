const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const db = require("./db.js");
const PizzaRoute = require("./routes/pizzaRoutes");
const orderRoute = require("./routes/orderRoute");
app.use(express.json());
app.use(cors());

app.use("/api/pizzas", PizzaRoute);
app.use("/api/orders", orderRoute);

const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.setHeader("Access-Controls-Allow-Credentials", "true");
  res.send("Server Working" + port);
});

app.listen(port, "0.0.0.0", () => "Server running on port");

// 27eb6K1Q4ljI9S0q
