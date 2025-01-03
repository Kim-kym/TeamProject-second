import React from "react";

function CartList({ cart, removeFromCart, updateQuantity }) {
  // 항목별 총액 계산 함수
  const calculateItemTotal = (item) => {
    const toppingsTotal = item.toppings
      ? item.toppings.reduce(
          (sum, topping) => sum + topping.price * topping.quantity,
          0
        )
      : 0;

    const sidesTotal = item.sides
      ? item.sides.reduce((sum, side) => sum + side.price * side.quantity, 0)
      : 0;

    const drinksTotal = item.drinks
      ? item.drinks.reduce(
          (sum, drink) => sum + drink.price * drink.quantity,
          0
        )
      : 0;

    return (
      item.price * item.quantity + toppingsTotal + sidesTotal + drinksTotal
    );
  };

  // 총액 계산
  const totalAmount = cart.reduce(
    (total, item) => total + calculateItemTotal(item),
    0
  );

  // 결제 처리 함수
  const handlePayment = () => {
    setPaymentCompleted(true); // 결제 완료 상태 변경
    setIsOpen(false); // 장바구니 닫기
  };

  const toggleCart = () => {
    setIsOpen(!isOpen); // 장바구니 열기/닫기 상태 변경
  };

  return (
    <div id="cart">
      <h2>장바구니</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              {/* 이름 및 기본 가격 */}
              <span>{item.name}</span> <p>{item.price}원</p>
              {/* 양념감자 옵션(맛) 표시 */}
              {item.options && (
                <p>
                  맛: <strong>{item.options}</strong>
                </p>
              )}
              {/* 토핑 표시 */}
              {item.toppings && item.toppings.length > 0 && (
                <ul>
                  {item.toppings.map((topping, index) => (
                    <li key={`${item.id}-topping-${index}`}>
                      {topping.name} x {topping.quantity}개 ({topping.price}원)
                    </li>
                  ))}
                </ul>
              )}
              {/* 사이드 표시 */}
              {item.sides && item.sides.length > 0 && (
                <ul>
                  {item.sides.map((side, index) => (
                    <li key={`${item.id}-side-${index}`}>
                      {side.name} x {side.quantity}개 ({side.price}원)
                    </li>
                  ))}
                </ul>
              )}
              {/* 음료 표시 */}
              {item.drinks && item.drinks.length > 0 && (
                <ul>
                  {item.drinks.map((drink, index) => (
                    <li key={`${item.id}-drink-${index}`}>
                      {drink.name} x {drink.quantity}개 ({drink.price}원)
                    </li>
                  ))}
                </ul>
              )}
              {/* 수량 조정 */}
              <div className="quantity-container">
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
              </div>
            </div>

            {/* 항목 총액 */}
            <div className="item-total">{calculateItemTotal(item)}원</div>

            {/* 삭제 버튼 */}
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              삭제
            </button>
          </div>
        ))}
      </div>

      {/* 총액 표시 */}
      <div className="total">
        <h3>총액: {totalAmount}원</h3>
      </div>
    </div>
  );
}
export default CartList;
