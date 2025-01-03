import BasedModal from "./BasedModal";
import ToppingList from "./ToppingList";
import { useState, useEffect, useRef } from "react";
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
  onModalTypeChange,
}) {
  const defaultSide = sideMenuData.find((item) => item.name === "감자튀김");
  const defaultDrink = drinkMenuData.find((item) => item.name === "콜라");
  // 기본 메뉴를 포함한 상태로 초기화
  const [sideQuantity, setSideQuantity] = useState(() =>
    defaultSide ? { [defaultSide.id]: 1 } : {}
  );

  const [drinkQuantity, setDrinkQuantity] = useState(() =>
    defaultDrink ? { [defaultDrink.id]: 1 } : {}
  );

  const [selectedSide, setSelectedSide] = useState(null); // 선택된 사이드 메뉴 상태

  const handleSideSelect = (side) => {
    setSelectedSide(side); // 사이드 메뉴 선택 처리
  };

  const handleAddSideToCart = () => {
    if (selectedSide) {
      addToCart({
        id: selectedSide.id,
        name: selectedSide.name,
        quantity: 1,
        price: selectedSide.price,
        category: "side", // 사이드 메뉴로 구분
      });
      setOpen(false); // 모달 닫기
    }
  };

  const hasDefaultSideChanged = useRef(false);
  const hasDefaultDrinkChanged = useRef(false);

  useEffect(() => {
    // 사이드 메뉴에서 기본값이 아닌 다른 메뉴가 선택되었는지 확인
    const nonDefaultSideSelected = Object.entries(sideQuantity).some(
      ([id, qty]) => qty > 0 && parseInt(id) !== defaultSide?.id
    );

    if (
      nonDefaultSideSelected &&
      defaultSide &&
      !hasDefaultSideChanged.current
    ) {
      hasDefaultSideChanged.current = true; // 기본값이 이미 변경된 것으로 표시
      setSideQuantity((prev) => ({
        ...prev,
        [defaultSide.id]: 0,
      }));
    }
    // 음료 메뉴에서 기본값이 아닌 다른 메뉴가 선택되었는지 확인
    const nonDefaultDrinkSelected = Object.entries(drinkQuantity).some(
      ([id, qty]) => qty > 0 && parseInt(id) !== defaultDrink?.id
    );

    if (
      nonDefaultDrinkSelected &&
      defaultDrink &&
      !hasDefaultDrinkChanged.current
    ) {
      hasDefaultDrinkChanged.current = true; // 기본값이 이미 변경된 것으로 표시
      setDrinkQuantity((prev) => ({
        ...prev,
        [defaultDrink.id]: 0,
      }));
    }
  }, [sideQuantity, drinkQuantity, defaultSide, defaultDrink]);

  // 초기화를 위해 기본값으로 돌아올 때, 리셋 플래그를 재설정
  useEffect(() => {
    if (!Object.values(sideQuantity).some((qty) => qty > 0)) {
      hasDefaultSideChanged.current = false;
    }
    if (!Object.values(drinkQuantity).some((qty) => qty > 0)) {
      hasDefaultDrinkChanged.current = false;
    }
  }, [sideQuantity, drinkQuantity]);

  const [productQuantity, setproductQuantity] = useState({});
  const [optionModalOpen, setOptionModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    title: "",
    options: [],
    selectedOption: "",
    targetId: null,
  });
  useEffect(() => {
    if (!open) {
      // 세트 메뉴 모달이 닫힐 때 상태 초기화
      setSideQuantity(defaultSide ? { [defaultSide.id]: 1 } : {});
      setDrinkQuantity(defaultDrink ? { [defaultDrink.id]: 1 } : {});
      setproductQuantity({});
    }
  }, [open]);

  // 기본값 설정
  const handleQuantityChange = (setter, isSide, isDrink) => (id, change) => {
    const sideItem = sideMenuData.find((item) => item.id === id);

    setter((prev) => {
      const currentQuantity = prev[id] || 0;

      // 양념감자 처리
      if (sideItem?.name === "양념감자") {
        if (currentQuantity === 1 && change > 0) {
          console.log("양념감자의 수량이 이미 1입니다. 추가할 수 없습니다.");
          return prev;
        }

        const updatedState = { [id]: Math.max(currentQuantity + change, 0) };
        Object.keys(prev).forEach((key) => {
          updatedState[key] = key === id.toString() ? updatedState[key] : 0;
        });

        if (change > 0 && updatedState[id] === 1) {
          setOpen(false); // 세트메뉴 모달 닫기
          handleOptionModalOpen(id); // 옵션 모달 열기
        }

        return updatedState;
      }

      // 사이드 및 음료 메뉴 처리
      if (isSide || isDrink) {
        const updatedState = { [id]: change > 0 ? 1 : 0 };
        Object.keys(prev).forEach((key) => {
          updatedState[key] = key === id.toString() ? updatedState[key] : 0;
        });
        return updatedState;
      }

      // 기타 메뉴 처리
      return {
        ...prev,
        [id]: Math.max(currentQuantity + change, 0),
      };
    });
  };

  const handleOptionConfirm = (selectedOptions) => {
    console.log("선택된 양념감자 맛:", selectedOptions);
    console.log("modalConfig.targetId:", modalConfig.targetId);

    // 장바구니에 선택한 맛 정보를 추가
    addToCart({
      id: modalConfig.targetId,
      name: "양념감자",
      options: selectedOptions, // 선택된 맛 정보
      quantity: 0, // 수량은 handleQuantityChange에서 이미 증가
    });

    setOptionModalOpen(false); // 모달 닫기
  };

  // 추가 가격 계산
  const calculateExtraPrice = (item, defaultItem) => {
    if (!defaultItem || item.id === defaultItem.id) return null; // 기본 포함된 항목은 추가 가격 없음
    return item.price - defaultItem.price; // 기본 메뉴와의 가격 차
  };

  const calculateTotalPrice = () => {
    const toppingsPrice = Object.entries(productQuantity).reduce(
      (total, [id, qty]) => {
        const product = productMenuData.find(
          (item) => item.id === parseInt(id)
        );
        return total + (product?.price || 0) * qty;
      },
      0
    );

    const sidesPrice = Object.entries(sideQuantity).reduce(
      (total, [id, qty]) => {
        const side = sideMenuData.find((item) => item.id === parseInt(id));
        // 기본값인 감자튀김 제외
        if (side?.name === "감자튀김") return total;
        return total + (side?.price || 0) * qty;
      },
      0
    );

    const drinksPrice = Object.entries(drinkQuantity).reduce(
      (total, [id, qty]) => {
        const drink = drinkMenuData.find((item) => item.id === parseInt(id));
        // 기본값인 콜라 제외
        if (drink?.name === "콜라") return total;
        return total + (drink?.price || 0) * qty;
      },
      0
    );

    return (
      (selectedItem?.price || 0) + toppingsPrice + sidesPrice + drinksPrice
    );
  };

  const handleAddToCart = () => {
    const toppings = Object.entries(productQuantity)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => ({
        ...productMenuData.find((item) => item.id === parseInt(id)),
        quantity: qty,
      }));

    const sides = Object.entries(sideQuantity)
      .filter(([id, qty]) => {
        const side = sideMenuData.find((item) => item.id === parseInt(id));
        // 기본값인 감자튀김 제외
        return qty > 0 && side?.name !== "감자튀김";
      })
      .map(([id, qty]) => ({
        ...sideMenuData.find((item) => item.id === parseInt(id)),
        quantity: qty,
      }));

    const drinks = Object.entries(drinkQuantity)
      .filter(([id, qty]) => {
        const drink = drinkMenuData.find((item) => item.id === parseInt(id));
        // 기본값인 콜라 제외
        return qty > 0 && drink?.name !== "콜라";
      })
      .map(([id, qty]) => ({
        ...drinkMenuData.find((item) => item.id === parseInt(id)),
        quantity: qty,
      }));

    const cartItem = {
      ...selectedItem,
      toppings,
      sides,
      drinks,
      quantity: 1, // 기본 수량
    };

    addToCart(cartItem); // 장바구니에 추가
    setOpen(false); // 모달 닫기
  };

  const handleMenuToggle = () => {
    if (typeof onModalTypeChange === "function") {
      console.log("Switching to custom menu modal");
      onModalTypeChange("custom");
    } else {
      console.error("onModalTypeChange is not a function or undefined");
    }
  };

  return (
    <BasedModal
      isOpen={open && !optionModalOpen}
      onClose={() => setOpen(false)}
    >
      <div className="set-menu-modal">
        <div className="selected-menu">
          <img src={selectedItem.imgurl} alt={selectedItem.name} />
          <div>
            <h3>{selectedItem?.name}</h3>
            <p>알레르기: {selectedItem.allergy || "없음"}</p>
            <p>가격: {formatPrice(selectedItem.price)}원</p>
            <p>{selectedItem ? "현재: 세트 메뉴" : "현재: 단품 메뉴"}</p>
            <label className="image-checkbox-container">
              <input
                type="checkbox"
                className="image-checkbox"
                // checked={isSetMenuSelected}
                onChange={handleMenuToggle}
              />
              <span>단품 메뉴로 변경</span> {/* 체크박스 옆에 표시될 텍스트 */}
            </label>
          </div>
        </div>
        <h3 className="Total-Price">
          Total Price: {formatPrice(calculateTotalPrice())}
        </h3>

        <h4>토핑 추가</h4>
        <ToppingList
          productData={productMenuData}
          quantityMap={productQuantity}
          handleQuantityChange={handleQuantityChange(setproductQuantity)}
        />
        <div style={{ marginBottom: "30px" }}></div>

        <h4>사이드 메뉴</h4>
        <ToppingList
          productData={sideMenuData.map((item) => ({
            ...item,
            extraPrice: calculateExtraPrice(item, defaultSide),
            hidePrice: item.id === defaultSide?.id, // 기본값 감자튀김의 가격 숨김 처리
          }))}
          quantityMap={sideQuantity}
          handleQuantityChange={handleQuantityChange(
            setSideQuantity,
            true,
            false
          )} // 사이드 메뉴
        />
        <div style={{ marginBottom: "30px" }}></div>

        <h4>음료 선택</h4>
        <ToppingList
          productData={drinkMenuData.map((item) => ({
            ...item,
            extraPrice: calculateExtraPrice(item, defaultDrink),
            hidePrice: item.id === defaultDrink?.id, // 기본값 콜라의 가격 숨김 처리
          }))}
          quantityMap={drinkQuantity}
          handleQuantityChange={handleQuantityChange(
            setDrinkQuantity,
            false,
            true
          )} // 음료 메뉴
        />
        <div className="actions">
          <button onClick={handleAddToCart}>추가</button>
          <button onClick={() => setOpen(false)}>취소</button>
        </div>
      </div>
      <OptionSelectionModal
        open={optionModalOpen} // 독립적인 상태로 관리
        setOpen={setOptionModalOpen}
        title={modalConfig.title}
        options={modalConfig.options}
        selectedOptions={modalConfig.selectedOptions || []}
        setSelectedOptions={(updateFn) =>
          setModalConfig((prev) => ({
            ...prev,
            selectedOptions: updateFn(prev.selectedOptions),
          }))
        }
        onConfirm={(selectedOptions) => {
          handleOptionConfirm(selectedOptions);
          setOptionModalOpen(false); // 옵션 모달만 닫기
        }}
      />
    </BasedModal>
  );
}

export default SetMenuModal;
