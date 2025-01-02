import "../../styled/slideTopping.css";
export default function SlideTopping({
  item,
  quantityMap = {},
  handleQuantityChange,
}) {
  if (!item) {
    console.error("Invalid item:", item);
    return <div className="error">유효하지 않은 아이템입니다.</div>;
  }

  if (!quantityMap) {
    console.error("Invalid quantityMap:", quantityMap);
    return <div className="error">수량 데이터가 유효하지 않습니다.</div>;
  }
  return (
    // {/* <h3>토핑 추가</h3> */}
    // {/* <Carousel responsive={responsive}> */}
    <div className="card">
      <img className="product" src={item.imgurl} alt={item.imgurl}></img>
      <h2>{item.name}</h2>
      {item.extraPrice !== undefined ? (
        <p className={`price ${item.hidePrice ? "hidden" : ""}`}>
          {item.extraPrice > 0
            ? `+${item.extraPrice}원`
            : `${item.extraPrice}원`}
        </p>
      ) : (
        <p className={`price ${item.hidePrice ? "hidden" : ""}`}>
          {item.price}원
        </p>
      )}
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
