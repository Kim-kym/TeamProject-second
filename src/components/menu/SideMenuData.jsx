import { useState } from "react";
// import SideMenuList from "../sideMenuList";

function SideMenuData({ handleMenuClick }) {
  // 금액에 , 넣기
  const formatPrice = (price) => price.toLocaleString("ko-KR");

  /* 사이드 메뉴 리스트 */

  const [sideList] = useState([
    {
      id: 301,
      name: "감자튀김",
      price: 3000,
      imgurl: "/image/side/fried-potato.jpg",
    },

    {
      id: 302,
      name: "양념감자",
      price: 3500,
      imgurl: "/image/side/seasoned-potato.jpg",
    },

    {
      id: 303,
      name: "치즈 감자튀김",
      price: 4000,
      imgurl: "/image/side/cheese-fried-potato.jpg",
    },

    {
      id: 304,
      name: "치즈스틱",
      price: 2500,
      imgurl: "/image/side/cheese-sticks.jpg",
    },

    {
      id: 305,
      name: "치즈볼 3p",
      price: 2500,
      imgurl: "/image/side/cheese-ball.jpg",
    },

    {
      id: 306,
      name: "치즈볼 6p",
      price: 4500,
      imgurl: "/image/side/cheese-ball.jpg",
    },

    {
      id: 307,
      name: "날개 4p",
      price: 3500,
      imgurl: "/image/side/wing.jpg",
    },

    {
      id: 308,
      name: "날개 8p",
      price: 6000,
      imgurl: "/image/side/wing.jpg",
    },

    {
      id: 309,
      name: "너겟 4p",
      price: 3500,
      imgurl: "/image/side/nugget.jpg",
    },

    {
      id: 310,
      name: "어니언링",
      price: 3500,
      imgurl: "/image/side/onion-rings.jpg",
    },

    {
      id: 311,
      name: "에그타르트 2p",
      price: 3000,
      imgurl: "/image/side/eggtarte.jpg",
    },

    {
      id: 312,
      name: "에그타르트 4p",
      price: 5500,
      imgurl: "/image/side/eggtarte.jpg",
    },

    {
      id: 313,
      name: "콘샐러드",
      price: 2000,
      imgurl: "/image/side/corn-salad.jpg",
    },

    {
      id: 314,
      name: "바닐라 소프트 아이스크림",
      price: 2000,
      imgurl: "/image/side/soft-ice-cream.jpg",
    },

    {
      id: 315,
      name: "초코 소프트 아이스크림",
      price: 2300,
      imgurl: "/image/side/choco-ice-cream.jpg",
    },

    {
      id: 316,
      name: "칠리소스",
      price: 1000,
      imgurl: "/image/side/chili-sauce.jpg",
    },

    {
      id: 317,
      name: "스위트칠리소스",
      price: 1000,
      imgurl: "/image/side/sweet-chili-sauce.jpg",
    },
  ]);

  return (
    <div id="side">
      {/* 조건부 렌더링 */}
      <ul>
        {sideList.map((menu) => (
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
export default SideMenuData;
