import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Cart from "../Cart";
import { useCartContext } from "../context/cart_context";

function CartLogo() {
  const { total_item } = useCartContext();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="basket">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Cart />
      </Modal>
      <div onClick={handleShow} className="cart-logo">
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{
            color: "#d70e0e",
            position: "relative",
            top: "10px",
            left: "5px",
          }}
          size="2x"
        />
        <div className="total-item">
          <h6>{total_item}</h6>
        </div>
      </div>
    </div>
  );
}

export default CartLogo;
