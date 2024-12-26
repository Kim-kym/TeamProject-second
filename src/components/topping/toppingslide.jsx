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

export default function SlideToping(props) {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 1024 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 1024, min: 800 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 800, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  // const productData = [
  //   {
  //     id: 1,
  //     imageurl: "/image/topping/cheese.jpg",
  //     name: "치즈",
  //     price: "+600",
  //   },
  //   {
  //     id: 2,
  //     imageurl: "/image/topping/cabbage.png",
  //     name: "양배추",
  //     price: "+600",
  //   },
  //   {
  //     id: 3,
  //     imageurl: "/image/topping/patty.jpg",
  //     name: "패티",
  //     price: "+600",
  //   },
  //   {
  //     id: 4,
  //     imageurl: "/image/topping/bacon.jpg",
  //     name: "베이컨",
  //     price: "+600",
  //   },
  //   {
  //     id: 5,
  //     imageurl: "/image/topping/ketchup.jpg",
  //     name: "케첩",
  //     price: "+600",
  //   },
  //   {
  //     id: 6,
  //     imageurl: "/image/topping/mustard.jpg",
  //     name: "머스타드",
  //     price: "+600",
  //   },
  //   {
  //     id: 7,
  //     imageurl: "/image/topping/mayonnaise.jpg",
  //     name: "마요네즈",
  //     price: "+600",
  //   },
  // ];

  // const product = productData.map(item =>(
  //   <toppingSlide />
  // ));

  return (
    // {/* <h3>토핑 추가</h3> */}
    // {/* <Carousel responsive={responsive}> */}
    <div className="card">
      <button>
        <img className="product" src={props.url} alt="product image"></img>
        <h2>{props.name}</h2>
        <p className="price">{props.price}</p>
      </button>
      <Counter />
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
