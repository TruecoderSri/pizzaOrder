import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
export default function Checkout({ subTotal }) {
  const dispatch = useDispatch();
  function tokenHandler({ token }) {
    console.log(token);
    dispatch(placeOrder(token, subTotal));
  }

  return (
    <div>
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51Mk5eUSF4mejSqJ86D0ExCfXFiqDHODRpLeD1Zdvd3bWnBo9duXQF2aHOJW34XB2C6v0OBy4pGsiOb090JSkdAzJ00vxNXC11q"
        currency="INR"
      >
        <button className="checkOut">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
