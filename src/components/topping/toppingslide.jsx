import "../../styled/slideTopping.css";

export default function SlideTopping({
  item,
  quantityMap = {},
  handleQuantityChange,
}) {
  if (!item || !item.id) {
    console.error("Invalid item:", item);
    return <div className="error">유효하지 않은 아이템입니다.</div>;
  }

  const itemPrice =
    item.extraPrice !== undefined ? item.extraPrice : item.price || 0;
  const quantity = quantityMap[item.id] || 0;

  return (
    <div className="card">
      <img
        className="product"
        src={item.imgurl}
        alt={item.name || "토핑 이미지"}
      />
      <h2>{item.name || "토핑 이름 없음"}</h2>
      {item.extraPrice !== undefined ? (
        <p className={`price ${item.hidePrice ? "hidden" : ""}`}>
          {item.extraPrice > 0
            ? `+${item.extraPrice}원`
            : `${item.extraPrice}원`}
        </p>
      ) : (
        <p className={`price ${item.hidePrice ? "hidden" : ""}`}>
          {itemPrice}원
        </p>
      )}
      <div className="count-btn">
        <button
          onClick={() => handleQuantityChange(item.id, -1)}
          disabled={quantity <= 0}
        >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(item.id, +1)}>+</button>
      </div>
    </div>
  );
}
