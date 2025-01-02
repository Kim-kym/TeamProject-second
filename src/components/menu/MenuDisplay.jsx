import React from "react";
import Category from "./Category";
import MenuList from "./MenuList";

function MenuDisplay({
  currentMenu,
  setCurrentMenu,
  addToCart,
  handleMenuClick,
  menuListData,
}) {
  return (
    <div className="menu-display">
      {/* 카테고리 버튼 */}
      <Category setCurrentMenu={setCurrentMenu} />
      <MenuList
        menuData={menuListData[currentMenu]}
        addToCart={addToCart}
        handleMenuClick={handleMenuClick}
      />
    </div>
  );
}

export default MenuDisplay;
