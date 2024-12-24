import React from "react";

function BugermenuList({ menuList }) {
  // 특정 항목을 클릭했을 때 동작하는 함수
  const handleClick = (item) => {
    console.log(`${item.name}을(를) 클릭했습니다!`);
    alert(`${item.name}를 장바구니에 담았습니다.`);
  };

  return (
    <ul>
      {menuList.map((item) => (
        <li key={item.id} onClick={() => handleClick(item)} id="choice">
          <img
            src={item.imgurl}
            alt={item.name}
            style={{ width: "100px", height: "100px" }}
          />
          <p>{item.name}</p>
          <p>가격: {item.price}원</p>
          <p>알레르기: {item.allergy}</p>
        </li>
      ))}
    </ul>
  );
}

export default BugermenuList;
