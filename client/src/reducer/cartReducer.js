function cartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    let { curColor, curSize, amount, id, product, shortDescription } =
      action.payload;

    let cartProduct;

    cartProduct = {
      id: id + curColor,
      name: product.productName,
      curColor,
      curSize,
      amount,
      image: product.images[0].thumbnail,
      shortDescription: shortDescription,
      price: product.price,
    };
    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;
      initialVal = initialVal + price * amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_price,
    };
  }

  return state;
}

export default cartReducer;
