import React from "react";

function BurgerMenuList({ burgerMenuList }) {
  const formatPrice = (price) => price.toLocaleString("ko-KR");
  // 특정 항목을 클릭했을 때 동작하는 함수
  const handleClick = (item) => {
    console.log(`${item.name}을(를) 클릭했습니다!`);
    alert(`${item.name}를 장바구니에 담았습니다.`);
  };

  return (
    <ul>
      {burgerMenuList.map((item) => (
        <li key={item.id} onClick={() => handleClick(item)}>
          <img
            src={item.imgurl}
            alt={item.name}
            style={{ width: "100px", height: "100px" }}
          />
          <p>{item.name}</p>
          <p>가격: {formatPrice(item.price)} 원</p>
          <p>알레르기: {item.allergy}</p>
        </li>
      ))}
    </ul>
  );
}

export default BurgerMenuList;
