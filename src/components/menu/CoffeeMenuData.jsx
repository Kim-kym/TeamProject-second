import { useState } from "react";
// import CoffeeMenuList from "../coffeeMenuList";

function CoffeeMenuData({ handleMenuClick }) {
  const formatPrice = (price) => price.toLocaleString("ko-KR");

  const [coffeeList] = useState([
    {
      id: 201,
      name: "아메리카노",
      price: 2500,
      imgurl: "/image/coffee/americano.jpg",
    },

    {
      id: 202,
      name: "카페라떼",
      price: 3000,
      imgurl: "/image/coffee/caffe-latte.jpg",
    },

    {
      id: 203,
      name: "바닐라라떼",
      price: 3500,
      imgurl: "/image/coffee/vanilla-latte.jpg",
    },
  ]);

  return (
    <div id="coffee">
      {/* 조건부 렌더링 */}
      {/* 커피 메뉴 리스트 */}
      <ul>
        {coffeeList.map((menu) => (
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
export default CoffeeMenuData;
