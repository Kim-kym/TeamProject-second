import { useState } from "react";

function DrinkMenuData({ handleMenuClick }) {
  const formatPrice = (price) => price.toLocaleString("ko-KR");

  const [DrinkList] = useState([
    {
      id: 101,
      name: "콜라",
      price: 2000,
      imgurl: "/image/drink/coke.jpg",
    },

    {
      id: 102,
      name: "제로 콜라",
      price: 2000,
      imgurl: "/image/drink/zero-coke.jpg",
    },

    {
      id: 103,
      name: "스프라이트",
      price: 2000,
      imgurl: "/image/drink/sprite.jpg",
    },

    {
      id: 104,
      name: "제로 스프라이트",
      price: 2000,
      imgurl: "/image/drink/zero-sprite.jpg",
    },

    {
      id: 105,
      name: "환타 오렌지",
      price: 2000,
      imgurl: "/image/drink/fanta-orange.jpg",
    },

    {
      id: 106,
      name: "환타 포도",
      price: 2000,
      imgurl: "/image/drink/fanta-grape.jpg",
    },

    {
      id: 107,
      name: "환타 파인",
      price: 2000,
      imgurl: "/image/drink/fanta-pine.jpg",
    },

    {
      id: 108,
      name: "복숭아아이스티",
      price: 2500,
      imgurl: "/image/drink/peach-iced-tea.jpg",
    },

    {
      id: 109,
      name: "레몬에이드",
      price: 3000,
      imgurl: "/image/drink/lemonade.jpg",
    },

    {
      id: 110,
      name: "블루레몬에이드",
      price: 3000,
      imgurl: "/image/drink/blue-lemonade.jpg",
    },

    {
      id: 111,
      name: "오랜지주스",
      price: 3000,
      imgurl: "/image/drink/orange.jpg",
    },

    {
      id: 112,
      name: "초코라떼",
      price: 4000,
      imgurl: "/image/drink/hot-chocolate.jpg",
    },
  ]);

  return (
    <div id="drink">
      {/* 음료 메뉴 리스트 */}
      <ul>
        {DrinkList.map((menu) => (
          <li key={menu.id} onClick={() => handleMenuClick(menu)}>
            <img
              src={menu.imgurl}
              alt={menu.name}
              style={{ width: "100px", height: "120px" }}
            />
            <p>{menu.name}</p>
            <p>가격: {formatPrice(menu.price)}원</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default DrinkMenuData;
