import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useCartContext } from "./context/cart_context";

function Cart() {
  const { cart, setDecrease, setIncrement, total_price } = useCartContext();
  if (cart.length === 0) {
    return (
      <div>
        <h3>No Cart in Item </h3>
      </div>
    );
  }
  const subTotal = total_price + total_price * 0.25;
  const saveCart = async () => {
    try {
      const response = await axios.post("http://localhost:3001/cart", { cart });
      console.log("Cart saved successfully", response.data);
    } catch (error) {
      console.error("Error saving cart items:", error);
    }
  };

  return (
    <>
      <div className="cart">
        {cart?.map((item, index) => {
          return (
            <Container key={index} style={{ paddingTop: "20px" }}>
              <Row>
                <Col>
                  {cart.image ? (
                    <p>Loading</p>
                  ) : (
                    <img
                      className="cart-image"
                      alt={item.name}
                      src={item.image}
                    />
                  )}
                </Col>
                <Col xs={6}>
                  <div className="cart-product-name">
                    <Row>
                      {cart.name ? <p>Loading</p> : <h3>{item.name}</h3>}
                      {cart.name ? (
                        <p>Loading</p>
                      ) : (
                        <p>{item.shortDescription}</p>
                      )}
                    </Row>
                  </div>

                  <div className="color-size">
                    <div
                      className="btn-style"
                      style={{ background: item.curColor }}
                    ></div>
                    <div className="cart-size">{item.curSize}</div>
                  </div>
                </Col>
                <Col className="cart-button">
                  <div className="amount-toggle">
                    <button
                      onClick={() => setDecrease(item.id)}
                      className="minus-btn"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <div className="quantity">
                      {" "}
                      <div className="quantity">
                        <p>{item.amount}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setIncrement(item.id);
                      }}
                      className="plus-btn"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>
          );
        })}
        <div className="buy-button">
          <button onClick={saveCart} className="add-cart-btn">
            ${subTotal} Buy Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
