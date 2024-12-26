import { useState } from "react";
import "../../styled/slideTopping.css";
// import { productData } from "../../toppingData";

const Counter = () => {
  const [number, setNumber] = useState(0);
  //   const [total, setTotal] = useState(topping.price);

  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };
  return (
    <div className="count-btn">
      <button onClick={decrease}>-</button>
      <p>{number}</p>
      <button onClick={increase}>-</button>
    </div>
  );
};

export default Counter;
