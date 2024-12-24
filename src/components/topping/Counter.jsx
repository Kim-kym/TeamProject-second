import { useState } from "react";
import "../../styled/slideTopping.css";

const Counter = () => {
  const [number, setNumber] = useState(0);
  //   const [total, setTotal] = useState(topping.price);

  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };
  return (
    <div className="count-btn">
      <button onClick={increase}>-</button>
      <p>{number}</p>
      <button onClick={decrease}>+</button>
    </div>
  );
};

export default Counter;
