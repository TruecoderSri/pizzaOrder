// import { useSelector } from "react-redux";
export const addToCart = (pizza, qty, variant) => (dispatch, getState) => {
  var cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.img,
    variant: variant,
    quantity: Number(qty),
    prices: pizza.prices,
    price: pizza.prices[0][variant] * qty,
    originalPrice: pizza.prices[0][variant],
  };

  if (cartItem.quantity > 6) {
    alert("A maximum of only 6 can be selected");
  } else if (cartItem.quantity < 1) {
    dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  } else {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  }

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
