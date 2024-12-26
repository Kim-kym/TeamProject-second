import { useState } from "react";
import QuantityInput from "./CounterRe";

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(product.price);

  const handleClickCounter = (num) => {
    setQuantity((prev) => prev + num);
    setTotal((prev) => prev + product.price * num);
  };
  const handleBlurInput = (quantity) => {
    const newQuantity = quantity;
    setQuantity(newQuantity);
    setTotal(product.price * newQuantity);
  };

  return (
    <div>
      <QuantityInput
        quantity={quantity}
        stock={product.stock}
        onClick={handleClickCounter}
        onBlur={handleBlurInput}
      />
      {/* <span>{product.price}</span> */}
      <span>{quantity}</span>
      <span>{total}</span>
    </div>
  );
}
