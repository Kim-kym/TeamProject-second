// import Category from "../components/menu/Category";
import logo from "/image/logo1.jpg";
import "../styled/mainHome.css";
import { useState } from "react";
import CartList from "../components/cart/cartList";
import MenuDisplay from "../components/menu/MenuDisplay";
import Modal from "./Modal";

function MainHome() {
  const [currentMenu, setCurrentMenu] = useState("burger"); // 초기 메뉴는 'burger'

  // 선택한 메뉴 정보 불러오기
  const handleMenuClick = (menuItem) => {
    console.log("Selected item:", menuItem);
  };

  // 장바구니 상태 관리
  const [cart, setCart] = useState([]);

  // 장바구니 열림/닫힘 상태
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 장바구니에 항목 추가
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // 이미 장바구니에 있으면 수량만 증가
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // 처음 장바구니에 추가하는 경우
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // 장바구니에서 항목 삭제
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  // 장바구니 항목 수량 수정
  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) return; // 수량이 1보다 적을 수 없도록
    setCart(
      cart.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  // // 모달 상태 관리
  const [isToppingModalOpen, setToppingModalOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  // 토핑 모달 열기
  const openToppingModal = (burgerMenuList) => {
    setSelectedMenuItem(burgerMenuList); // 선택된 메뉴 아이템 저장
    setToppingModalOpen(true); // 모달 열기
  };

  return (
    <div className="root">
      <h1>
        <img src={logo} alt="Krusty Krab Logo" style={{ width: "150px" }} />
        Krusty Krab
      </h1>
      <main>
        <div className="category">
          <MenuDisplay
            currentMenu={currentMenu}
            setCurrentMenu={setCurrentMenu}
            addToCart={addToCart}
            handleMenuClick={handleMenuClick}
            openToppingModal={openToppingModal}
          />
        </div>
        {/* 장바구니 리스트 */}
        <div
          className={`cart-container ${isCartOpen ? "open" : ""}`}
          onClick={() => setIsCartOpen(!isCartOpen)} // 장바구니 열기/닫기
        ></div>
        <CartList
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />

        <div className="modal">
          {isToppingModalOpen && (
            <Modal
              isOpen={isToppingModalOpen}
              onClose={() => setToppingModalOpen(false)}
            >
              <div>
                <h2>{selectedMenuItem?.name}</h2>
                <p>Price: {selectedMenuItem?.price}원</p>
                <p>Allergy Info: {selectedMenuItem?.allergy}</p>
                <img
                  src={selectedMenuItem?.imgurl}
                  alt={selectedMenuItem?.name}
                />
              </div>
            </Modal>
          )}
        </div>
      </main>
    </div>
  );
}

export default MainHome;
