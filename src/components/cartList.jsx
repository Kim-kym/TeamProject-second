import React from "react";

function CartList({ cartList }) {
  return (
    <ul>
      <li key={item.id}>
        <p>{item.name}</p>
        <p>가격: {item.price}원</p>
      </li>
    </ul>
  );
}

export default CartList;
