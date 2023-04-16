const mongoose = require("mongoose");

const PizzaSchema = mongoose.Schema(
  {
    name: { type: String, require },
    variants: [],
    prices: [],
    category: { type: String, require },
    img: { type: String, require },
    desc: { type: String, require },
  },
  { 
    timestamps: true,
  }
);

const pizzaModel = mongoose.model("pizzas", PizzaSchema);

module.exports = pizzaModel;
