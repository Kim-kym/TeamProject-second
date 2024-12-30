import "../../styled/slideTopping.css";
export default function SlideToping({
  item,
  quantityMap,
  handleQuantityChange,
}) {
  console.log("아이템 정보" + item.price)
  return (
    <div className="card">
      {/* <button> */}
      <img className="product" src={item.imgurl} alt={item.imgurl}></img>
      <h2>{item.name}</h2>
      <p className="price">{item.price}원</p>
      {/* </button> */}
      <div className="count-btn">
        <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
        <span>{quantityMap[item.id] || 0}</span>
        <button onClick={() => handleQuantityChange(item.id, +1)}>+</button>
      </div>
    </div>
    // {/* </Carousel> */}
  );
}
