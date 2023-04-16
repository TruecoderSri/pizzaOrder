import React from "react";
import { useSelector } from "react-redux";
import "../index.css";
function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark shadow-lg p-2  mb-5 bg-black ">
      <a className="navbar-brand" href="/" style={{ padding: 10 }}>
        Pizzeria
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link" href="/cart">
              Cart {cartState.cartItems.length}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
