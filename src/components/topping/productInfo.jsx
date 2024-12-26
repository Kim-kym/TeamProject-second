import { useState } from "react";
import QuantityInput from "./CounterRe";

export default function ProductInfo({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(item.price);

  const handleClickCounter = (num) => {
    setQuantity((prev) => prev + num);
    setTotal((prev) => prev + item.price * num);
  };
  const handleBlurInput = (quantity) => {
    const newQuantity = quantity;
    setQuantity(newQuantity);
    setTotal(item.price * newQuantity);
  };

  return (
    <div>
      <QuantityInput
        quantity={quantity}
        stock={item.stock}
        onClick={handleClickCounter}
        onBlur={handleBlurInput}
      />
      {/* <span>{product.price}</span> */}
      <span>{quantity}</span>
      <span>{total}</span>
    </div>
  );
}
