import React from "react";

function CartList({ cart, removeFromCart }) {
  return (
    <div id="cart">
      <h2>장바구니</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.imgurl} alt={item.name} style={{ width: "50px" }} />
            {item.name} - {item.price}원
            <button onClick={() => removeFromCart(item.id)}>삭제</button>
            {/* 수량 변경 기능 */}
            <div>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
                min="1"
              />
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        총액:{" "}
        {cart.reduce((total, item) => total + item.price * item.quantity, 0)}원
      </div>
    </div>
  );
}

export default CartList;
