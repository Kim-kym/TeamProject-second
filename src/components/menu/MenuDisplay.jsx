import React from "react";
import Category from "./Category";
import SetMenuData from "./BurgerSetMenuData";
import BurgerMenu from "./BurgerMenuData";
import SideMenuData from "./SideMenuData";
import DrinkMenuData from "./DrinkMenuData";
import CoffeeMenuData from "./CoffeeMenuData";

function MenuDisplay({
  currentMenu,
  setCurrentMenu,
  addToCart,
  handleMenuClick,
  openToppingModal,
  formatPrice,
}) {
  return (
    <div className="menu-display">
      {/* 카테고리 버튼 */}
      <Category setCurrentMenu={setCurrentMenu} />

      {/* 현재 선택된 메뉴에 따른 렌더링 */}
      {currentMenu === "burgerSetMenuList" && (
        <SetMenuData
          currentMenu={currentMenu}
          addToCart={addToCart}
          handleMenuClick={handleMenuClick}
          formatPrice={formatPrice}
        />
      )}
      {currentMenu === "burger" && (
        <BurgerMenu
          burgerMenuList={currentMenu}
          addToCart={addToCart}
          handleMenuClick={handleMenuClick}
          formatPrice={formatPrice}
          // openToppingModal={openToppingModal}
        />
      )}

      {currentMenu === "side" && (
        <SideMenuData
          sideList={currentMenu}
          addToCart={addToCart}
          handleMenuClick={handleMenuClick}
          formatPrice={formatPrice}
          // openToppingModal={openToppingModal}
        />
      )}
      {currentMenu === "drink" && (
        <DrinkMenuData
          drinkList={currentMenu}
          addToCart={addToCart}
          handleMenuClick={handleMenuClick}
          formatPrice={formatPrice}
        />
      )}
      {currentMenu === "coffee" && (
        <CoffeeMenuData
          coffeeList={currentMenu}
          addToCart={addToCart}
          handleMenuClick={handleMenuClick}
          formatPrice={formatPrice}
        />
      )}
    </div>
  );
}

export default MenuDisplay;
