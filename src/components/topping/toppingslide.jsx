import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import cheese from "/image/topping/cheese.jpg";
// import cabbage from "/image/topping/cabbage.png";
// import patty from "/image/topping/patty.jpg";
// import bacon from "/image/topping/bacon.jpg";
// import ketchup from "/image/topping/ketchup.jpg";
// import mustard from "/image/topping/mustard.jpg";
// import mayonnaise from "/image/topping/mayonnaise.jpg";
import "../../styled/slideTopping.css";
// import Counter from "./Counter.jsx";
// import Cart from "../topping/CounterRe.jsx";
import { useState } from "react";
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
      {/* <QuantityInput
        quantity={quantity}
        stock={props.id}
        setQuantity={setQuantity}
      /> */}
    </div>
    // <div className="card">
    //   <button>
    //     <img className="product" src={cabbage} alt="product image"></img>
    //     <h2>양배추</h2>
    //     <p className="price">+600원</p>
    //   </button>
    //   <Counter />
    // </div>
    // <div className="card">
    //   <button>
    //     <img className="product" src={patty} alt="product image"></img>
    //     <h2>패티</h2>
    //     <p className="price">+600원</p>
    //   </button>
    //   <Counter />
    // </div>
    // <div className="card">
    //   <button>
    //     <img className="product" src={bacon} alt="product image"></img>
    //     <h2>베이컨</h2>
    //     <p className="price">+600원</p>
    //   </button>
    //   <Counter />
    // </div>
    // <div className="card">
    //   <button>
    //     <img className="product" src={ketchup} alt="product image"></img>
    //     <h2>케첩</h2>
    //     <p className="price">FREE</p>
    //   </button>
    //   <Counter />
    // </div>
    // <div className="card">
    //   <button>
    //     <img className="product" src={mustard} alt="product image"></img>
    //     <h2>머스타드</h2>
    //     <p className="price">FREE</p>
    //   </button>
    //   <Counter />
    // </div>
    // <div className="card">
    //   <button>
    //     <img className="product" src={mayonnaise} alt="product image"></img>
    //     <h2>마요네즈</h2>
    //     <p className="price">FREE</p>
    //   </button>
    //   <Counter />
    // </div>

    // {/* </Carousel> */}
  );
}
