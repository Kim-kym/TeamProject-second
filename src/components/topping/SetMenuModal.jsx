import Modal from "./Modal";
import ToppingList from "./ToppingList";
import { useState } from "react";
import OptionSelectionModal from "./OptionSelectionModal";

function SetMenuModal({
  open,
  setOpen,
  selectedItem,
  addToCart,
  sideMenuData,
  drinkMenuData,
  productMenuData,
  formatPrice,
  handleOptionModalOpen,
}) {
  const [sideQuantity, setSideQuantity] = useState({});
  const [drinkQuantity, setDrinkQuantity] = useState({});
  const [productQuantity, setproductQuantity] = useState({});
  const [optionModalOpen, setOptionModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    title: "",
    options: [],
    selectedOption: "",
  });

  const handleQuantityChange = (setter) => (id, change) => {
    const sideItem = sideMenuData.find((item) => item.id === id);

    if (sideItem?.name === "양념감자" && change > 0) {
      console.log("양념감자 선택, 맛 모달 열기"); // 디버깅용
      //  양념감자 수량 증가 시 맛 선택 모달 표시
      handleOptionModalOpen(id); // 부모 핸들러 호출
    } else {
      //  일반적인 수량 변경 처리
      setter((prev) => ({
        ...prev,
        [id]: Math.max((prev[id] || 0) + change, 0),
      }));
    }
  };

  const calculateTotalPrice = () => {
    const productPrice = Object.entries(productQuantity).reduce(
      (total, [id, qty]) => {
        const product = productMenuData.find(
          (item) => item.id === parseInt(id)
        );
        return total + (product?.price || 0) * qty;
      },
      0
    );

    const sidePrice = Object.entries(sideQuantity).reduce(
      (total, [id, qty]) => {
        const side = sideMenuData.find((item) => item.id === parseInt(id));
        return total + (side?.price || 0) * qty;
      },
      0
    );

    const drinkPrice = Object.entries(drinkQuantity).reduce(
      (total, [id, qty]) => {
        const drink = drinkMenuData.find((item) => item.id === parseInt(id));
        return total + (drink?.price || 0) * qty;
      },
      0
    );

    return (selectedItem?.price || 0) + productPrice + sidePrice + drinkPrice;
  };

  const handleAddToCart = () => {
    addToCart({
      ...selectedItem,
      product: Object.entries(productQuantity).map(([id, qty]) => ({
        ...productMenuData.find((item) => item.id === parseInt(id)),
        quantity: qty,
      })),
      sides: Object.entries(sideQuantity).map(([id, qty]) => ({
        ...sideMenuData.find((item) => item.id === parseInt(id)),
        quantity: qty,
      })),
      drinks: Object.entries(drinkQuantity).map(([id, qty]) => ({
        ...drinkMenuData.find((item) => item.id === parseInt(id)),
        quantity: qty,
      })),
    });
    setOpen(false);
  };

  return (
    <Modal isOpen={open} onClose={() => setOpen(false)}>
      <div>
        <img
          src={selectedItem.imgurl}
          alt={selectedItem.name}
          style={{
            width: "150px",
            height: "150px",
            marginRight: "20px",
            cursor: "pointer",
          }}
        />
        <h3>{selectedItem?.name}</h3>
        <p>알레르기: {selectedItem.allergy || "없음"}</p>
        <p>가격: {formatPrice(selectedItem.price)}원</p>
        <p>{selectedItem ? "현재: 세트 메뉴" : "현재: 단품 메뉴"}</p>
        <h4>Total Price: {formatPrice(calculateTotalPrice())}</h4>

        <h4>토핑 변경</h4>
        <ToppingList
          productData={productMenuData}
          quantityMap={productQuantity}
          handleQuantityChange={handleQuantityChange(setproductQuantity)}
        />
        <div style={{ marginBottom: "30px" }}></div>

        <h4>사이드 메뉴</h4>
        <ToppingList
          productData={sideMenuData}
          quantityMap={sideQuantity}
          handleQuantityChange={handleQuantityChange(setSideQuantity)}
        />
        {/* 간격 추가 */}
        <div style={{ marginBottom: "30px" }}></div>

        <h4>음료 선택</h4>
        <ToppingList
          productData={drinkMenuData}
          quantityMap={drinkQuantity}
          handleQuantityChange={handleQuantityChange(setDrinkQuantity)}
        />
        <button onClick={handleAddToCart}>추가</button>
        <button onClick={() => setOpen(false)}>취소</button>
      </div>
    </Modal>
  );
}

export default SetMenuModal;
