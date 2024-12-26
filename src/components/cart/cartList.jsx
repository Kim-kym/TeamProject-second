import React from "react";

function CartList({ cart, removeFromCart, updateQuantity }) {
  // 카테고리별 금액 합산
  const categories = [...new Set(cart.map((item) => item.category))]; // 카테고리별 항목
  const categoryTotals = categories.map((category) => {
    const categoryTotal = cart
      .filter((item) => item.category === category)
      .reduce((total, item) => total + item.price * item.quantity, 0);
    return { category, total: categoryTotal };
  });

  // 전체 금액 계산
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div id="cart">
      <h2>장바구니</h2>

      {/* 카테고리별 합산금액 표시 */}
      {categoryTotals.map((categoryTotal) => (
        <div key={categoryTotal.category}>
          <h3>
            {categoryTotal.category} 합계: {categoryTotal.total}원
          </h3>
        </div>
      ))}

      {/* 장바구니 항목을 가로로 나열 */}
      <div className="cart-items">
        {cart.map((item) => (
          <span key={item.id} className="cart-item">
            <img
              src={item.imgurl}
              alt={item.name}
              style={{ width: "50px", marginRight: "10px" }}
            />
            <span>{item.name}</span> <p>{item.price}원</p>
            {/* 수량 변경 기능 */}
            <span className="quantity-container">
              <button
                className="quantity-btn"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <input
                className="quantity-input"
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
                min="1"
              />
              <button
                className="quantity-btn"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </span>
            <button onClick={() => removeFromCart(item.id)}>삭제</button>
          </span>
        ))}
      </div>

      {/* 전체 금액 표시 */}
      <div>
        <h3>총액: {totalAmount}원</h3>
      </div>
    </div>
  );
}

export default CartList;
