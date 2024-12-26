import Category from "../components/menu/Category";
import logo from "/image/logo1.jpg";
import "../styled/mainHome.css";
import { useState } from "react";
import BurgerMenuList from "../components/menu/burgerMenu";
import DrinkMenuList from "../components/menu/drinkMenuList";
import CoffeeMenuList from "../components/menu/coffeeMenuList";
import SideMenuList from "../components/menu/sideMenuList";
import BurgerSetMenuList from "../components/menu/burgerSetMenuList";
// import CartList from "../components/cartList";

function App() {
  const [currentMenu, setCurrentMenu] = useState("burger"); // 초기 메뉴는 'burger'

  //메뉴 목록 리스트
  const [burgerSetMenuList] = useState([
    {
      id: 401,
      name: "게살버거 세트",
      price: 11000,
      allergy: "갑각류, 마늘",
      imgurl: "/image/buger/buger1.jpg",
    },

    {
      id: 402,
      name: "불고기 버거 세트",
      price: 9500,
      allergy: "마늘",
      imgurl: "/image/buger/buger2.jpg",
    },

    {
      id: 403,
      name: "치킨버거 세트",
      price: 11500,
      allergy: "닭, 마늘",
      imgurl: "/image/buger/buger3.jpg",
    },

    {
      id: 404,
      name: "쉬림프버거 세트",
      price: 11500,
      allergy: "새우, 마늘",
      imgurl: "/image/buger/buger4.jpg",
    },

    {
      id: 405,
      name: "치즈 버거 세트",
      price: 9500,
      allergy: "유제품",
      imgurl: "/image/buger/buger5.jpg",
    },

    {
      id: 406,
      name: "머쉬룸 버거 세트",
      price: 11500,
      allergy: "마늘",
      imgurl: "/image/buger/buger6.jpg",
    },

    {
      id: 407,
      name: "핫치킨 버거 세트",
      price: 10800,
      allergy: "마늘, 닭",
      imgurl: "/image/buger/buger7.jpg",
    },

    {
      id: 408,
      name: "라이스 버거 세트",
      price: 9900,
      allergy: "마늘",
      imgurl: "/image/buger/buger8.jpg",
    },

    {
      id: 409,
      name: "더블치즈 버거 세트",
      price: 9000,
      allergy: "마늘, 유제품",
      imgurl: "/image/buger/buger9.jpg",
    },
    {
      id: 410,
      name: "오징어 버거 세트",
      price: 10800,
      allergy: "마늘, 해산물, 오징어",
      imgurl: "/image/buger/buger10.jpg",
    },
    {
      id: 411,
      name: "트러플치즈 버거 세트",
      price: 12700,
      allergy: "마늘",
      imgurl: "/image/buger/buger11.jpg",
    },

    {
      id: 412,
      name: "돈까스 버거 세트",
      price: 11800,
      allergy: "마늘",
      imgurl: "/image/buger/buger12.jpg",
    },
  ]);

  const [burgerMenuList] = useState([
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

  const [drinkList] = useState([
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
    <div>
      <h1>
        <img src={logo} alt="Krusty Krab Logo" style={{ width: "150px" }} />
        Krusty Krab
      </h1>
      <main>
        {/* 카테고리 선택창 */}
        <Category setCurrentMenu={setCurrentMenu} />

        {/* 장바구니 리스트 */}
        {/* <CartList /> */}

        {/* 조건부 렌더링 */}
        <div id="choice">
          {/* 버거 세트 메뉴 리스트 */}
          {currentMenu === "burgerSetMenuList" && (
            <BurgerSetMenuList burgerSetMenuList={burgerSetMenuList} />
          )}

          {/* 버거 메뉴 리스트 */}
          {currentMenu === "burger" && (
            <BurgerMenuList burgerMenuList={burgerMenuList} />
          )}

          {/* 음료 메뉴 리스트 */}
          {currentMenu === "drink" && <DrinkMenuList drinkList={drinkList} />}

          {/* 커피 메뉴 리스트 */}
          {currentMenu === "coffee" && (
            <CoffeeMenuList coffeeList={coffeeList} />
          )}

          {/* 사이드 메뉴 리스트 */}
          {currentMenu === "side" && <SideMenuList sideList={sideList} />}
        </div>
      </main>
    </div>
  );
}

export default App;
