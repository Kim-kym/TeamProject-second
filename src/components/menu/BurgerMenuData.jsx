import { useState } from "react";
import Topping from "../topping/Modal";
import Modal from "../topping/Modal";
import "../../styled/Modal.css";

function BurgerMenuData({ handleMenuClick, formatPrice }) {
  const [MenuList] = useState([
    {
      id: 1,
      name: "게살버거",
      price: 7000,
      allergy: "갑각류, 마늘",
      imgurl: "/image/buger/buger1.jpg",
    },

    {
      id: 2,
      name: "불고기 버거",
      price: 5500,
      allergy: "마늘",
      imgurl: "/image/buger/buger2.jpg",
    },

    {
      id: 3,
      name: "치킨버거",
      price: 7500,
      allergy: "닭, 마늘",
      imgurl: "/image/buger/buger3.jpg",
    },

    {
      id: 4,
      name: "쉬림프버거",
      price: 7500,
      allergy: "새우, 마늘",
      imgurl: "/image/buger/buger4.jpg",
    },

    {
      id: 5,
      name: "치즈 버거",
      price: 5500,
      allergy: "유제품",
      imgurl: "/image/buger/buger5.jpg",
    },

    {
      id: 6,
      name: "머쉬룸 버거",
      price: 7500,
      allergy: "마늘",
      imgurl: "/image/buger/buger6.jpg",
    },

    {
      id: 7,
      name: "핫치킨 버거",
      price: 6800,
      allergy: "마늘, 닭",
      imgurl: "/image/buger/buger7.jpg",
    },

    {
      id: 8,
      name: "라이스 버거",
      price: 5900,
      allergy: "마늘",
      imgurl: "/image/buger/buger8.jpg",
    },

    {
      id: 9,
      name: "더블치즈 버거",
      price: 5000,
      allergy: "마늘, 유제품",
      imgurl: "/image/buger/buger9.jpg",
    },
    {
      id: 10,
      name: "오징어 버거",
      price: 6800,
      allergy: "마늘, 해산물, 오징어",
      imgurl: "/image/buger/buger10.jpg",
    },
    {
      id: 11,
      name: "트러플치즈 버거",
      price: 8700,
      allergy: "마늘",
      imgurl: "/image/buger/buger11.jpg",
    },

    {
      id: 12,
      name: "돈까스 버거",
      price: 7800,
      allergy: "마늘",
      imgurl: "/image/buger/buger12.jpg",
    },
  ]);

  return (
    <div id="burger">
      {/* 버거 메뉴 리스트 */}
      <ul>
        {MenuList.map((menu) => (
          <li
            key={menu.id}
            onClick={() => {
              handleMenuClick(menu);
              setOpen(true);
              formatPrice(Menu);
            }}
          >
            <img
              src={menu.imgurl}
              alt={menu.name}
              style={{ width: "100px", height: "100px" }}
            />
            <p>{menu.name}</p>
            <p>가격: {formatPrice(menu.price)} 원</p>
            <p>알레르기: {menu.allergy}</p>
            {/* <img src={menu.imgurl} alt={menu.name}></img> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BurgerMenuData;
