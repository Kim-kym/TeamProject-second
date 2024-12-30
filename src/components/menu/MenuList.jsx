import React from "react";

function MenuList({ menuData, handleMenuClick, setCurrentMenu }) {
  // 가격 포맷 함수
  const formatPrice = (price) => {
    if (typeof price !== "number") {
      price = parseFloat(price); // 숫자가 아닌 경우 변환
    }
    return price.toLocaleString("ko-KR");
  };

  console.log(menuData);

  return (
    <div className="menu-list">
      {menuData.map((menu) => (
        <div
          key={menu.id}
          onClick={() => handleMenuClick(menu)}
          className="menu-item"
        >
          <img
            src={menu.imgurl}
            alt={menu.name}
            style={{ width: "100px", height: "120px" }}
          />
          <p>{menu.name}</p>
          <p>가격: {formatPrice(menu.price)}원</p>
          {menu.allergy && <p>알레르기: {menu.allergy}</p>}{" "}
          {/* 알레르기 정보가 있을 경우만 표시 */}
        </div>
      ))}
    </div>
  );
}

export default MenuList;
