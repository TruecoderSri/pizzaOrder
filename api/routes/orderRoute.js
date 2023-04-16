const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51MlumGSIk4VfNunBMfkX164sEA3RlO7N7aC0tX0cz62IHEntgA2B4ASu6tBJSf5yf8lnu6gyJez43E6TAWcFoBKI00q5M7MES5"
);

// cross origin conncetion
router.post("/placeorder", async (req, res) => {
  const { token, subtotal, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    console.log("received order", token.id);
    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      res.send("Payment done successfully");
    } else {
      res.send("Payment Failed");
    }
  } catch (error) {
    console.error("error", error);
    return res
      .statusCode(400)
      .json({ message: "Something went wrong,try again!!", error });
  }
});
module.exports = router;
