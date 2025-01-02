import BasedModal from "./BasedModal";

function SetMenuModal({
  menuData = [],
  isOpen, // 변경: open → isOpen
  onClose, // 변경: setOpen → onClose
  selectedItem,
  addToCart,
  sideMenuData,
  drinkMenuData,
  productMenuData,
  formatPrice,
}) {
  const handleAddToCart = () => {
    const cartItem = {
      ...selectedItem,
      sides: Object.entries(sideMenuData).map(([id, qty]) => ({
        ...sideMenuData.find((item) => item.id === parseInt(id)),
        quantity: qty,
      })),
    };
    addToCart(cartItem);
    onClose(); // 모달 닫기
  };

  return (
    <BasedModal isOpen={isOpen} onClose={onClose}>
      <div className="set-menu-modal">
        <h3>{selectedItem.name}</h3>
        <button onClick={handleAddToCart}>추가</button>
        <button onClick={onClose}>취소</button>
      </div>
    </BasedModal>
  );
}

export default SetMenuModal;
