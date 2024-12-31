import "../../styled/slideTopping.css";
export default function SlideToping({
  item,
  quantityMap,
  handleQuantityChange,
}) {
  console.log("아이템 정보" + item.price);
  return (
    // {/* <h3>토핑 추가</h3> */}
    // {/* <Carousel responsive={responsive}> */}
    <div className="card">
      {/* <button> */}
      <img className="product" src={item.imgurl} alt={item.imgurl}></img>
      <h2>{item.name}</h2>
      {
        item.extraPrice !== undefined // extraPrice가 존재하는 경우에만 처리
          ? !item.hidePrice && (
              <p className="price">
                {item.extraPrice > 0
                  ? `+${item.extraPrice}원`
                  : `${item.extraPrice}원`}
              </p>
            )
          : !item.hidePrice && <p className="price">{item.price}원</p> // 기본 가격 처리
      }
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
