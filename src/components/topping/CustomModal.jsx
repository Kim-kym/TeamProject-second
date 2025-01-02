import BasedModal from "./BasedModal";
import { useState } from "react";
import ToppingList from "./ToppingList";

function CustomModal({
  formatPrice,
  isOpen, // 변경: open → isOpen
  onClose, // 변경: setOpen → onClose
  selectedItem,
  addToCart,
  productMenuData,
  onModalTypeChange,
}) {
  const [selectedMenu, setSelectedMenu] = useState(selectedItem || {});

  const handleAddToCart = () => {
    const cartItem = {
      ...selectedMenu,
      toppings: Object.entries(quantityMap)
        .filter(([_, quantity]) => quantity > 0)
        .map(([id, quantity]) => ({
          ...productMenuData.find((item) => item.id === parseInt(id)),
          quantity,
        })),
    };
    addToCart(cartItem);
    onClose(); // 모달 닫기
  };

  return (
    <BasedModal isOpen={isOpen} onClose={() => setOpen(false)}>
      <div className="single-menu-modal">
        <h3>{selectedMenu.name}</h3>
        <ToppingList productData={productMenuData || []} />
        <button onClick={handleAddToCart}>추가</button>
        <button onClick={onClose}>취소</button>
      </div>
    </BasedModal>
  );
}

export default CustomModal;
