import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cheese from "/image/topping/cheese.jpg";
import cabbage from "/image/topping/cabbage.png";
import patty from "/image/topping/patty.jpg";
import bacon from "/image/topping/bacon.jpg";
import ketchup from "/image/topping/ketchup.jpg";
import mustard from "/image/topping/mustard.jpg";
import mayonnaise from "/image/topping/mayonnaise.jpg";
import "../../styled/slideTopping.css";
import Counter from "./Counter.jsx";
import Cart from "../topping/CounterRe.jsx";
import { useState } from "react";
import QuantityInput from "../topping/CounterRe.jsx";

export default function SlideToping(props) {
  const [quantity, setQuantity] = useState(0);

  return (
    // {/* <h3>토핑 추가</h3> */}
    // {/* <Carousel responsive={responsive}> */}
    <div className="card">
      <button>
        <img className="product" src={props.url} alt="product image"></img>
        <h2>{props.name}</h2>
        <p className="price">{props.price}</p>
      </button>
      <QuantityInput
        quantity={quantity}
        stock={props.id}
        setQuantity={setQuantity}
      />
    </div>
  );
}
