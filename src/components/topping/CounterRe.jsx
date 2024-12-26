const QuantityInput = ({ quantity, setQuantity, id }) => {
  console.log(quantity);
  return (
    <>
      <button
        onClick={() => setQuantity((prev) => quantity - 1)}
        className="quantity_input_button"
      >
        -
      </button>
      <p className="quantity_count">{quantity}</p>
      <button
        onClick={() => setQuantity((prev) => quantity + 1)}
        className="quantity_input_button"
      >
        +
      </button>
    </>
  );
};

// function Cart({ items }) {

//   return (
//     <div>
//       {items.map((item) => (
//         <div className="count-btn" key={item.id}>
//           <button onClick={() => removeFromCart(item.id) - 1}>-</button>
//           <p>{cartItems}</p>
//           <button onClick={() => addToCart(item.id) + 1}>+</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Cart;

export default QuantityInput;
