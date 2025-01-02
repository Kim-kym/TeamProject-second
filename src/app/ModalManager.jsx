import { useState, useEffect } from "react";
import CustomModal from "../components/topping/CustomModal";
import SetMenuModal from "../components/topping/SetMenuModal";
import OptionSelectionModal from "../components/topping/OptionSelectionModal";
// import productMenuData from "../components/menu/ProductMenuData";

const ModalManager = ({ menuDatas, formatPrice, addToCart }) => {
  //  모달 열고 닫기 상태 관리
  const [isOpen, setIsOpen] = useState(false);
  //  단품 또는 세트 모달 상태 관리
  const [modalType, setModalType] = useState(null);
  //  선택한 메뉴 저장 상태 관리
  const [selectedItem, setSelectedItem] = useState();
  //  옵션 모달 상태 관리
  const [modalConfig, setModalConfig] = useState({
    title: "",
    options: [],
    selectedOptions: [],
  });
  //  수량 조절 상태 관리
  const [quantityMap, setQuantityMap] = useState({});

  //    단품 또는 세트 메뉴 선택 시 모달 오픈, 필요한 데이터 설정
  const handleModalClick = (menu) => {
    console.log("Menu:", menu);
    if (menu.category === "burger" || menu.category === "Set") {
      setSelectedItem(menu);
      setModalType(menu.category === "burger" ? "custom" : "setMenu");
      setIsOpen(true);
    } else if (menu.name === "양념감자" || menu.category === "coffee") {
      setModalConfig({
        title:
          menu.category === "coffee" ? "커피 옵션 선택" : "양념감자 맛 선택",
        options:
          menu.category === "coffee"
            ? ["아이스", "핫"]
            : ["치즈", "양파", "매운맛", "갈릭"],
        selectedOptions: [],
        targetId: menu.id,
      });
      setModalType("optionSelection");
      setIsOpen(true);
    }
  };

  // 수량 변경 핸들러
  const handleModalQuantityChange = (id, change) => {
    setQuantityMap((prevMap) => ({
      ...prevMap,
      [id]: Math.max((prevMap[id] || 0) + change, 0),
    }));
  };

  // 모달을 닫고, 관련 데이터 초기화
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
    setModalType(null);
    setModalConfig({ title: "", options: [], selectedOptions: [] });
  };

  const renderModal = () => {
    //  모달이 열리지 않게 조건 추가
    console.log(
      "renderModal invoked, isOpen:",
      isOpen,
      "modalType:",
      modalType
    );

    if (!isOpen) return null;
    switch (modalType) {
      case "custom":
        return (
          <CustomModal
            isOpen={isOpen}
            onClose={handleCloseModal}
            selectedItem={selectedItem}
            addToCart={addToCart}
            quantityMap={quantityMap}
            handleModalClick={handleModalClick}
            handleModalQuantityChange={handleModalQuantityChange}
            productMenuData={menuDatas.product}
            formatPrice={formatPrice}
          />
        );

      case "setMenu":
        return (
          <SetMenuModal
            isOpen={isOpen}
            onClose={handleCloseModal}
            selectedItem={selectedItem}
            addToCart={addToCart}
            sideMenuData={menuDatas.side}
            drinkMenuData={menuDatas.drink}
            productMenuData={menuDatas.product}
            formatPrice={(price) => price.toLocaleString("ko-KR")}
          />
        );

      case "optionSelection":
        return (
          <OptionSelectionModal
            isOpen={isOpen}
            onClose={handleCloseModal}
            title={modalConfig.title}
            options={modalConfig.options}
            selectedOptions={modalConfig.selectedOptions}
            setSelectedOptions={(updateFn) =>
              setModalConfig((prev) => ({
                ...prev,
                selectedOptions: updateFn(prev.selectedOptions),
              }))
            }
            onConfirm={(selectedOptions) => {
              addToCart({
                id: modalConfig.targetId,
                name: modalConfig.title.includes("커피") ? "커피" : "양념감자",
                options: selectedOptions.join(", "),
                quantity: 1,
              });
              handleCloseModal();
            }}
          />
        );

      default:
        return null;
    }
  };
  // renderModal 함수의 결과를 반환
  return renderModal();
};

export default ModalManager;
