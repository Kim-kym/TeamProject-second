import BasedModal from "./BasedModal";
import ToppingList from "./ToppingList";
import { useState, useEffect, useRef } from "react";
import BurgerSetMenuData from "../menu/BurgerSetMenuData";
import productMenuData from "../menu/ProductMenuData";

function CustomModal({
  formatPrice,
  open,
  setOpen,
  selectedItem,
  addToCart,
  onModalTypeChange,
}) {
  const [selectedMenu, setSelectedMenu] = useState(selectedItem || {});
  const [quantityMap, setQuantityMap] = useState({});
  const [isSetMenuSelected, setIsSetMenuSelected] = useState(false);

  const carouselRef = useRef(null);

  const handleModalOpen = () => {
    if (carouselRef.current) {
      carouselRef.current.goToSlide(0); //  첫 번째 슬라이드로 이동
    }
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsSetMenuSelected(isChecked);

    if (isChecked && setMenu) {
      // 세트 메뉴로 전환 시 상위 컴포넌트에 세트 메뉴 정보 전달
      onModalTypeChange("setMenu");
    }
  };

  const setMenu = selectedItem?.setMenuId
    ? BurgerSetMenuData.find((set) => set.id === selectedItem.setMenuId)
    : null;

  useEffect(() => {
    if (selectedItem) {
      setSelectedMenu(selectedItem);
      setQuantityMap({});
      setIsSetMenuSelected(false);
    }
  }, [selectedItem]);

  // useEffect(() => {
  //   console.log("Selected item updated:", selectedItem);
  // }, [selectedItem]);

  useEffect(() => {
    if (selectedItem) {
      console.log(
        "Selected item updated:",
        JSON.stringify(selectedItem, null, 2)
      );
    }
  }, [selectedItem]);

  // 모달이 열릴 때 첫 번째 슬라이드로 이동
  useEffect(() => {
    if (open && carouselRef.current) {
      carouselRef.current.goToSlide(0);
    }
  }, [open]);

  const handleQuantityChange = (id, change) => {
    setQuantityMap((prevMap) => ({
      ...prevMap,
      [id]: Math.max((prevMap[id] || 0) + change, 0),
    }));
  };

  const handleMenuToggle = () => {
    if (!setMenu) return; // 세트 메뉴가 없는 경우 아무 작업도 하지 않음
    if (selectedMenu === setMenu) {
      // 세트 메뉴 → 단품 메뉴 전환
      setSelectedMenu(selectedItem);
      setIsSetMenuSelected(false);
    } else {
      // 단품 메뉴 → 세트 메뉴 전환
      setSelectedMenu(setMenu);
      setIsSetMenuSelected(true);
    }
  };

  const calculateTotalPrice = () => {
    const basePrice = selectedMenu?.price || selectedItem?.price || 0;
    return Object.entries(quantityMap).reduce((total, [id, quantity]) => {
      const topping = productMenuData.find((item) => item.id === parseInt(id));
      return total + (topping?.price || 0) * quantity;
    }, basePrice);
  };

  const handleAddToCart = () => {
    const toppings = Object.entries(quantityMap)
      .filter(([_, quantity]) => quantity > 0)
      .map(([id, quantity]) => {
        const toppingData = productMenuData.find(
          (item) => item.id === parseInt(id)
        );
        return toppingData ? { ...toppingData, quantity } : null;
      })
      .filter((topping) => topping !== null); // 유효한 토핑만 포함

    const cartItem = {
      ...selectedMenu,
      toppings, // 선택된 토핑 추가
      quantity: 1,
    };

    addToCart(cartItem); // 부모 컴포넌트로 전달
    setOpen(false);
  };

  return (
    <BasedModal
      isOpen={open}
      onClose={() => setOpen(false)}
      onAfterOpen={handleModalOpen} //  모달이 열리면 첫 번째 슬라이드로 이동
    >
      <div className="single-menu-modal">
        {/* 선택한 메뉴 정보: 이미지, 이름, 알레르기, 가격 */}
        {selectedMenu && (
          <div className="selected-menu">
            <img
              src={selectedMenu.imgurl}
              alt={selectedMenu.name}
              onClick={handleMenuToggle}
            />
            <div>
              <h3>{selectedMenu.name}</h3>
              <p>알레르기: {selectedMenu.allergy || "없음"}</p>
              <p>가격: {formatPrice(selectedMenu.price)}</p>
              <p>{isSetMenuSelected ? "현재: 세트 메뉴" : "현재: 단품 메뉴"}</p>
              <label className="image-checkbox-container">
                <input
                  type="checkbox"
                  className="image-checkbox"
                  checked={isSetMenuSelected}
                  onChange={handleCheckboxChange}
                />
                <span>세트 메뉴 선택</span> {/* 체크박스 옆에 표시될 텍스트 */}
              </label>
            </div>
          </div>
        )}
        <h3 className="Total-Price">
          Total Price: {formatPrice(calculateTotalPrice())}원
        </h3>
        <h4 className="Topping-Plus">토핑 추가</h4>
        <ToppingList
          productData={productMenuData}
          quantityMap={quantityMap}
          handleQuantityChange={handleQuantityChange}
          carouselRef={carouselRef} // Carousel ref 전달
        />
        <div className="actions">
          <button onClick={handleAddToCart}>추가</button>
          <button onClick={() => setOpen(false)}>취소</button>
        </div>
      </div>
    </BasedModal>
  );
}

export default CustomModal;
