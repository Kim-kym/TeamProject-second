import React, { useState } from "react";
import Modal from "../topping/Modal"; // Modal 컴포넌트 임포트
import "../../styled/Modal.css"; // Modal 스타일링 임포트
import "../topping/toppingslide";
import SlideToping from "../topping/toppingslide";

function BurgerMenuList({
  burgerMenuList,
  addToCart,
  onMenuClick,
  isToppingModalOpen,
  item,
  quantityMap,
  handleQuantityChange,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 메뉴 아이템 저장

  // 모달 열기
  const openModal = (item) => {
    setSelectedItem(item); // 선택된 메뉴 아이템 저장
    setIsModalOpen(true); // 모달 열기
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
    setSelectedItem(null); // 선택된 아이템 초기화
  };

  const formatPrice = (price) => price.toLocaleString("ko-KR");

  return (
    <div id="menu">
      <ul>
        {burgerMenuList.map((item) => (
          <li key={item.id} onClick={() => addToCart(item)}>
            <img
              src={item.imgurl}
              alt={item.name}
              style={{ width: "100px", height: "100px", cursor: "pointer" }}
              onClick={() => openModal(item)} // 이미지 클릭 시 모달 열기
            />
            <p>{item.name}</p>
            <p>가격: {formatPrice(item.price)} 원</p>
            <p>알레르기: {item.allergy}</p>
          </li>
        ))}
      </ul>

      {/* 모달 컴포넌트 */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedItem && (
          <div>
            <h2>{selectedItem.name}</h2>
            <img
              src={selectedItem.imgurl}
              alt={selectedItem.name}
              style={{ width: "200px", height: "200px" }}
            />
            <p>{formatPrice(selectedItem.price)} 원</p>
            <p>알레르기: {selectedItem.allergy}</p>
            {/* 여기에 추가적인 아이템 상세 정보를 넣을 수 있습니다. */}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default BurgerMenuList;
