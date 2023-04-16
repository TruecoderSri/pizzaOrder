const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./db.js");
const PizzaRoute = require("./routes/pizzaRoutes");
const orderRoute = require("./routes/orderRoute");
app.use(express.json());
app.use(cors());

app.use("/api/pizzas", PizzaRoute);
app.use("/api/orders", orderRoute);

app.get("/", (req, res) => {
  res.send("Server Working" + port);
});
const port = process.env.PORT || 5000;

app.listen(port, "0.0.0.0", () => "Server running on port");

// 27eb6K1Q4ljI9S0q
