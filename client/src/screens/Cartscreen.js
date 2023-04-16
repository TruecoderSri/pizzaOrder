import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import Checkout from "../Components/Checkout";
import { deleteFromCart } from "../actions/cartActions";
import "../index.css";
// import { FaPlus, FaMinus } from "react-icons/fa";
export default function Cartscreen() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "bolder",
              marginBottom: "3rem",
            }}
          >
            My Cart
          </h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left m-1 w-100">
                  <h1>
                    {item.name}[{item.variant}]
                  </h1>
                  <h1>
                    Price: {item.quantity}*{item.prices[0][item.variant]}=
                    {item.price}({item.originalPrice})
                  </h1>
                  <h1 style={{ display: "inline" }}>Quantity:</h1>
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity + 1, item.variant)
                      );
                    }}
                  ></i>
                  {item.quantity}
                  <b></b>
                  <i
                    className="fa fa-minus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity - 1, item.variant)
                      );
                    }}
                  ></i>

                  <hr />
                </div>
                <div className="m-1 w-100">
                  <img
                    src={item.image}
                    style={{ height: "80px", width: "80px" }}
                  />
                </div>
                <div className="m-1 w-100">
                  <i
                    className="fa fa-trash mt-4  "
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4 text-right">
          <h2 style={{ fontSize: "40px" }}>
            SubTotal: ₹ {subtotal}+<span style={{ fontSize: "18px" }}>GST</span>
          </h2>
          {/* <button className="checkOut">Check Out</button> */}
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
