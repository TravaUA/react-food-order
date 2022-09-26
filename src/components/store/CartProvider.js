import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemCartHandler = (item) => {};
  const reomovdItemCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 3,
    addItem: addItemCartHandler,
    removeItem: reomovdItemCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
