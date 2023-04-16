// import { combineReducers } from "redux";
// import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// // import { getAllPizzas } from "./actions/pizzaReducer";
// import { cartReducer } from "./reducers/addToCart";
// import { getAllPizzasReducer } from "./reducers/pizzaReducer";
// const finalReducer = combineReducers({
//   getAllPizzasReducer: getAllPizzasReducer,
//   cartReducer: cartReducer,
// });

// const initialState = {};

// const composeEnhancers = composeWithDevTools({});

// const store = configureStore(
//   finalReducer,
//   initialState,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;

import { combineReducers } from "redux";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzasReducer } from "./reducers/pizzaReducer";
// import { getAllPizzas } from "./actions/pizzaReducer";
import { cartReducer } from "./reducers/addToCart";
import { placeOrderReducer } from "./reducers/orderReducers";

const rootReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer: cartReducer,
  placeOrderReducer: placeOrderReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
};
const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState,
});

// const composeEnhancers = composeWithDevTools({});

// const store = configureStore({
//   reducer: rootReducer,
//   pre: initialState,
//   devTools: composeEnhancers(applyMiddleware(thunk)),
// });

export default store;
