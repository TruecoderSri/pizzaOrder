import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

export default function Pizza({ pizza }) {
  const [qty, setqty] = useState(1);
  const [variant, setvariant] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  function addtocart() {
    dispatch(addToCart(pizza, qty, variant));
  }

  return (
    <div className="shadow-lg p-3 mb-5 bg-white">
      <div className="dialog" onClick={handleShow}>
        <h1 className="pizza-name">{pizza.name}</h1>
        <img
          src={pizza.img}
          className="image-fluid"
          style={{ height: 200, width: 200 }}
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants</p>
          <select
            className="form-control"
            value={variant}
            onChange={(e) => {
              setvariant(e.target.value);
            }}
          >
            {pizza.variants.map((variant) => {
              return <option value={variant}>{variant}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={qty}
            onChange={(e) => {
              setqty(e.target.value);
            }}
          >
            {[...Array(6).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">Price: {pizza.prices[0][variant] * qty} Rs/-</h1>
        </div>
        <div className="m-1 w-100">
          <button onClick={addtocart} className="btn">
            Add To Cart
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.img}
            alt="pizza-img"
            style={{ height: 400 }}
            className="img-fluid"
          />
          <p>{pizza.desc}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
