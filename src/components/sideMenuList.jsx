import React from "react";

function SideMenuList({ sideList }) {
  const handleClick = (item) => {
    console.log(`${item.name}을(를) 클릭했습니다!`);
    alert(`${item.name}를 장바구니에 담았습니다.`);
  };

  return (
    <ul>
      {sideList.map((item) => (
        <li key={item.id} onClick={() => handleClick(item)}>
          <img
            src={item.imgurl}
            alt={item.name}
            style={{ width: "100px", height: "120px" }}
          />
          <p>{item.name}</p>
          <p>가격: {item.price}원</p>
        </li>
      ))}
    </ul>
  );
}

export default SideMenuList;
