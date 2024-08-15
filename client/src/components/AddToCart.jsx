import { faCheck, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useCartContext } from "../context/cart_context";

function AddToCart({ price, colors, sizes, product }) {
  const { addToCart } = useCartContext();
  const [curColor, setCurColor] = useState("");
  const [curSize, setCurSize] = useState("");
  const [amount, setAmount] = useState(0);
  const setIncrement = () => {
    amount < 998 ? setAmount(amount + 1) : setAmount(amount);
  };
  const setDecrement = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(amount);
  };
  const totalPrice = amount * price + amount * price * 0.25;
  const id = product._id;
  const shortDescription = product.shortDescription;
  return (
    <>
      <div className="size">
        <p>Choose a size</p>
        <div key={`inline-radio`}>
          {sizes?.map((item, index) => {
            return (
              <Form.Check
                inline
                label={item}
                key={index}
                name="group1"
                type="radio"
                id={`inline-radio-1`}
                className="size-option"
                onClick={() => setCurSize(item)}
              />
            );
          })}
        </div>
      </div>
      <div className="colors">
        <p>Choose a color</p>
        {colors?.map((item, index) => {
          return (
            <button
              className={item === curColor ? "btn-style active" : "btn-style"}
              style={{ background: item }}
              key={index}
              onClick={() => setCurColor(item)}
            >
              {item === curColor ? <FontAwesomeIcon icon={faCheck} /> : null}
            </button>
          );
        })}
      </div>
      {/* add to cart */}
      <div className="add-cart">
        <div className="amount-toggle">
          <button onClick={() => setDecrement()} className="minus-btn">
            <FontAwesomeIcon icon={faMinus} />
          </button>
          {/* <input className="quantity" value={amount} /> */}
          <div className="quantity">
            <p>{amount}</p>
          </div>
          <button
            onClick={() => {
              setIncrement();
            }}
            className="plus-btn"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <button
          className="add-cart-btn"
          onClick={() => {
            addToCart(curColor, curSize, amount, id, product, shortDescription);
          }}
        >
          ${totalPrice} Add To Cart
        </button>
      </div>
    </>
  );
}

export default AddToCart;
