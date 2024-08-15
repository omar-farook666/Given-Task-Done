import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
  //   cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (
    curColor,
    curSize,
    amount,
    id,
    product,
    shortDescription
  ) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { curColor, curSize, amount, id, product, shortDescription },
    });
  };
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, setDecrease, setIncrement }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

