import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../styled/slideTopping.css";
// import { useState } from "react";
// import QuantityInput from "../topping/CounterRe.jsx";
export default function SlideToping({
  item,
  quantityMap,
  handleQuantityChange,
}) {
  return (
    // {/* <h3>토핑 추가</h3> */}
    // {/* <Carousel responsive={responsive}> */}
    <div className="card">
      <button>
        <img className="product" src={item.imageurl} alt="product image"></img>
        <h2>{item.name}</h2>
        <p className="price">{item.price}</p>
      </button>
      <div className="count-btn">
        <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
        <span>{quantityMap[item.id] || 0}</span>
        <button onClick={() => handleQuantityChange(item.id, +1)}>+</button>
      </div>
    </div>
    // {/* </Carousel> */}
  );
}
