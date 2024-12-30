import React, { useCallback, useRef } from "react";
import Category from "./Category";
import MenuList from "./MenuList";
import Slider from "react-slick";

function MenuDisplay({
  currentMenu,
  setCurrentMenu,
  addToCart,
  handleMenuClick,
  menuListData,
}) {
  const slickRef = useRef(null);

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    dots: true,
    infinite: false, // 무한 슬라이드 비활성화
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <div className="menu-display">
      {/* 카테고리 버튼 */}
      <Category setCurrentMenu={setCurrentMenu} />
      <Slider {...settings} ref={slickRef}>
        <MenuList
          menuData={menuListData[currentMenu]}
          addToCart={addToCart}
          handleMenuClick={handleMenuClick}
        />
      </Slider>
    </div>
  );
}

export default MenuDisplay;
