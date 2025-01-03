import Category from "../components/menu/Category";
import logo from "/image/logo1.jpg";
import home from "/image/home_24.png";
import "../styled/MainHome.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartManager from "../components/cart/CartManager";
import MenuDisplay from "../components/menu/MenuDisplay";
// import Modal from "./Modal";
import BurgerSetMenuData from "../components/menu/BurgerSetMenuData";
import BurgerMenuData from "../components/menu/BurgerMenuData";
import CoffeeMenuData from "../components/menu/CoffeeMenuData";
import DrinkMenuData from "../components/menu/DrinkMenuData";
import SideMenuData from "../components/menu/SideMenuData";
import CustomModal from "../components/topping/CustomModal";
import SetMenuModal from "../components/topping/SetMenuModal";
import productMenuData from "../components/menu/ProductMenuData";
import OptionSelectionModal from "../components/topping/OptionSelectionModal";
import "../styled/Modal.css";

// import menuListData from "../components/menu/MenuList";

function MainHome() {
  const [currentMenu, setCurrentMenu] = useState("burger"); // 초기 메뉴는 'burger'
  const navigate = useNavigate();
  const [cart, setCart] = useState([]); //  장바구니 상태
  const [modalType, setModalType] = useState("custom");

  const handleMenuClick = (menu) => {
    if (menu.category === "burger") {
      setModalType("custom");
      setSelectedItem(menu);
      setOpen(true);
    } else if (menu.category === "Set") {
      setModalType("setMenu");
      setSelectedItem(menu);
      setOpen(true);
    } else if (menu.name === "양념감자") {
      setModalConfig({
        title: "양념감자 맛 선택",
        options: ["치즈", "양파", "매운맛", "갈릭"], // 선택 가능한 맛 옵션
        selectedOptions: [],
        targetId: menu.id,
        name: menu.name, // 메뉴 이름 전달
      });
      setOptionModalOpen(true);
    } else if (menu.category === "side" || menu.category === "drink") {
      addToCart({
        id: menu.id,
        name: menu.name, // 메뉴 이름 전달
        price: menu.price,
        category: menu.category,
        quantity: 1,
      });
    } else if (menu.category === "coffee") {
      setModalConfig({
        title: "커피 옵션 선택",
        options: ["아이스", "핫"], // 선택 가능한 옵션
        selectedOptions: [],
        targetId: menu.id,
        name: menu.name, // 메뉴 이름 전달
      });
      setOptionModalOpen(true);
    } else {
      console.error("Unknown menu category:", menu.category);
    }
  };

  useEffect(() => {
    console.log(`Modal type changed to: ${modalType}`);
  }, [modalType]);

  const menuDatas = {
    Set: BurgerSetMenuData || [],
    burger: BurgerMenuData || [],
    drink: DrinkMenuData || [],
    coffee: CoffeeMenuData || [],
    side: SideMenuData || [],
    product: productMenuData || [],
  };

  // 메뉴 항목 클릭 시 장바구니에 추가
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // 기존 항목 병합
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + (item.quantity || 1),
                toppings: [
                  ...(cartItem.toppings || []),
                  ...(item.toppings || []),
                ],
                sides: [...(cartItem.sides || []), ...(item.sides || [])],
                drinks: [...(cartItem.drinks || []), ...(item.drinks || [])],
              }
            : cartItem
        )
      );
    } else {
      // 새 항목 추가
      setCart([...cart, { ...item, quantity: item.quantity || 1 }]);
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
  // 메뉴 가격
  const formatPrice = (price) => price.toLocaleString("ko-KR");

  //  모달 상태 관리
  const [open, setOpen] = useState(false);

  // 선택된 메뉴 아이템 저장
  const [selectedItem, setSelectedItem] = useState(null);

  // 선택된 토핑 저장
  const [selectedTopping, setSelectedTopping] = useState(null);

  // 옵션 선택 모달 상태
  const [optionModalOpen, setOptionModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    title: "",
    options: [],
    selectedOptions: [],
  });

  const handleOptionModalOpen = (menuId) => {
    setModalConfig({
      title: "양념감자 맛 선택",
      options: ["치즈", "양파", "매운맛", "갈릭"],
      selectedOptions: [],
      targetId: menuId, // 양념감자 ID 추적
    });
    setOptionModalOpen(true);
  };

  const handleOptionConfirm = (selectedOptions) => {
    if (selectedOptions.length === 0) {
      alert("옵션을 선택해주세요."); // 선택이 없을 경우 경고
      return;
    }

    const isCoffee = modalConfig.title.includes("커피");
    const selectedMenu = isCoffee
      ? CoffeeMenuData.find((menu) => menu.id === modalConfig.targetId)
      : SideMenuData.find((menu) => menu.id === modalConfig.targetId);

    if (!selectedMenu) {
      console.error("선택된 메뉴를 찾을 수 없습니다.");
      return;
    }

    const basePrice = selectedMenu.price;

    // 선택된 옵션 각각을 개별 항목으로 추가
    selectedOptions.forEach((option) => {
      addToCart({
        id: `${modalConfig.targetId}-${option}`, // 옵션별 고유 ID 생성
        name: `${selectedMenu.name} (${option})`, // 메뉴 이름 + 옵션
        options: option, // 선택된 옵션 정보
        price: basePrice, // 메뉴 가격 사용
        quantity: 1, // 기본 수량
      });
    });

    setOptionModalOpen(false); // 모달 닫기
  };
  const handleReturnClick = () => {
    navigate("/home"); // "/home" 경로로 이동
  };

  // 'custom' 또는 'setMenu'

  const handleModalTypeChange = (type) => {
    console.log(`Switching modal type to: ${type}`);
    setModalType(type);
    setOpen(true); // 모달을 다시 열어줌
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
            handleMenuClick={handleMenuClick}
            menuListData={menuDatas}
          />
        </div>
        {/* 장바구니 관리 */}
        <CartManager
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />

        {modalType === "custom" && selectedItem?.category === "burger" && (
          <CustomModal
            open={open}
            setOpen={setOpen}
            selectedItem={selectedItem}
            addToCart={addToCart}
            selectedTopping={selectedTopping}
            setSelectedTopping={setSelectedTopping}
            formatPrice={formatPrice}
            onModalTypeChange={handleModalTypeChange}
          />
        )}

        {modalType === "setMenu" && selectedItem?.category === "Set" && (
          <SetMenuModal
            open={open}
            setOpen={setOpen}
            selectedItem={selectedItem}
            addToCart={addToCart}
            formatPrice={formatPrice}
            sideMenuData={menuDatas.side}
            drinkMenuData={menuDatas.drink}
            productMenuData={menuDatas.product}
            onModalTypeChange={handleModalTypeChange}
          />
        )}

        {/* 옵션 선택 모달 */}
        <OptionSelectionModal
          open={optionModalOpen}
          setOpen={setOptionModalOpen}
          title={modalConfig.title}
          options={modalConfig.options}
          selectedOptions={modalConfig.selectedOptions || ""} //  단일 선택 상태 전달
          setSelectedOptions={(updateFn) =>
            setModalConfig((prev) => ({
              ...prev,
              selectedOptions: updateFn(prev.selectedOptions),
            }))
          }
          onConfirm={handleOptionConfirm}
        />
        {/* SetMenuModal 열기 */}
        {modalType === "setMenu" && selectedItem?.category === "Set" && (
          <SetMenuModal
            open={open}
            setOpen={setOpen}
            selectedItem={selectedItem}
            addToCart={addToCart}
            formatPrice={formatPrice}
            sideMenuData={menuDatas.side}
            drinkMenuData={menuDatas.drink}
            productMenuData={menuDatas.product}
            handleOptionModalOpen={handleOptionModalOpen}
            onModalTypeChange={handleModalTypeChange}
          />
        )}
      </main>
    </div>
  );
}

export default MainHome;
