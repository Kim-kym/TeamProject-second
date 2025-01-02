import logo from "/image/logo1.jpg";
import home from "/image/home_24.png";
import "../styled/MainHome.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartManager from "../components/cart/CartManager";
import MenuDisplay from "../components/menu/MenuDisplay";
import BurgerSetMenuData from "../components/menu/BurgerSetMenuData";
import BurgerMenuData from "../components/menu/BurgerMenuData";
import CoffeeMenuData from "../components/menu/CoffeeMenuData";
import DrinkMenuData from "../components/menu/DrinkMenuData";
import SideMenuData from "../components/menu/SideMenuData";
import productMenuData from "../components/menu/ProductMenuData";
import "../styled/Modal.css";

function MainHome() {
  const [currentMenu, setCurrentMenu] = useState("burger"); // 초기 메뉴는 'burger'
  const navigate = useNavigate();
  const [cart, setCart] = useState([]); // 장바구니 상태

  // 메뉴 항목 클릭 시 장바구니에 추가
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...item,
          quantity: 1,
          price: item.price || 0,
          category: item.category || "기타",
        },
      ]);
    }
  };

  // 장바구니 항목 삭제
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  // 장바구니 항목 수량 수정
  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) {
      removeFromCart(itemId);
    } else {
      setCart(
        cart.map((item) => (item.id === itemId ? { ...item, quantity } : item))
      );
    }
  };

  const menuDatas = {
    Set: BurgerSetMenuData || [],
    burger: BurgerMenuData || [],
    drink: DrinkMenuData || [],
    coffee: CoffeeMenuData || [],
    side: SideMenuData || [],
    product: productMenuData || [],
  };

  const handleReturnClick = () => {
    navigate("/home"); // "/home" 경로로 이동
  };

  const handleMenuClick = (menu) => {
    console.log("Selected menu:", menu);
    // 메뉴 클릭 시 필요한 추가 로직
    setCurrentMenu(menu.category); // 예: 클릭된 메뉴에 따라 카테고리 설정
  };

  return (
    <div className="root">
      <div className="back"></div>
      <h1>
        <img src={logo} alt="Krusty Krab Logo" style={{ width: "150px" }} />
        Krusty Krab
        <img
          src={home}
          alt="homeMenu"
          className="returnHome"
          onClick={handleReturnClick}
        />
      </h1>

      <main>
        <div className="category">
          {/* 메뉴 선택창 */}
          <MenuDisplay
            currentMenu={currentMenu}
            setCurrentMenu={setCurrentMenu}
            addToCart={addToCart}
            handleMenuClick={(menu) => {
              console.log("Menu item clicked in MenuDisplay:", menu);
              handleMenuClick;
            }}
            menuListData={menuDatas}
          />
        </div>

        {/* 장바구니 관리 */}
        <CartManager
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      </main>
    </div>
  );
}

export default MainHome;
