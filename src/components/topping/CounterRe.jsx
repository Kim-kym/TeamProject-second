import { useState } from "react";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  return (
    <div className="count-btn">
      <button onClick={removeFromCart}>-</button>
      <p>{cartItems}</p>
      <button onClick={addToCart}>+</button>
    </div>
  );
};
