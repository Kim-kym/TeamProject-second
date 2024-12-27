import Modal from "./Modal";
import { useState } from "react";
import SlideTopping from "./toppingslide";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CustomModal({
  formatPrice,
  open,
  setOpen,
  selectedItem,
  setSelectedItem,
  addToCart,
  selectedTopping,
  setSelectedTopping,
  handleMenuClick,
}) {
  // 모달
  //   const [open, setOpen] = useState(false);
  const [quantityMap, setQuantityMap] = useState({});

  const openModal = (menu) => {
    setSelectedItem(menu); // 선택된 메뉴 아이템 저장
    setIsModalOpen(true); // 모달 열기
  };

  const handleQuantityChange = (id, change) => {
    setQuantityMap((prevMap) => {
      const currentQuantity = prevMap[id] || 0;
      const newQuantity = currentQuantity + change;
      return { ...prevMap, [id]: Math.max(newQuantity, 0) };
    });
  };

  const calculateTotalPrice = () => {
    return productData.reduce((total, items) => {
      const quantity = quantityMap[items.id] || 0;
      const price = parseInt(items.price.replace("원", "").replace("+", ""));
      return total + price * quantity;
    }, selectedItem.price);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const productData = [
    {
      id: 901,
      imageurl: "/image/topping/cheese.jpg",
      name: "치즈",
      price: "+600원",
    },
    {
      id: 902,
      imageurl: "/image/topping/cabbage.png",
      name: "양배추",
      price: "+600원",
    },
    {
      id: 903,
      imageurl: "/image/topping/patty.jpg",
      name: "패티",
      price: "+600원",
    },
    {
      id: 904,
      imageurl: "/image/topping/bacon.jpg",
      name: "베이컨",
      price: "+600원",
    },
    {
      id: 905,
      imageurl: "/image/topping/ketchup.jpg",
      name: "케첩",
      price: "+600원",
    },
    {
      id: 906,
      imageurl: "/image/topping/mustard.jpg",
      name: "머스타드",
      price: "+600원",
    },
    {
      id: 907,
      imageurl: "/image/topping/mayonnaise.jpg",
      name: "마요네즈",
      price: "+600원",
    },
  ];

  return (
    <Modal isOpen={open} onClose={() => setOpen(false)}>
      <div>
        {selectedItem && (
          <div>
            <h2>토핑 선택하기</h2>
            <img
              src={selectedItem.imgurl}
              alt={selectedItem.name}
              style={{ width: "200px", height: "200px" }}
            />
            <p>{selectedItem.name}</p>
            <p>알레르기: {selectedItem.allergy}</p>
            <p>Price: {formatPrice(selectedItem.price)}</p>
            <h3>Total Price: {calculateTotalPrice()}원</h3>
            {/* 여기에 추가적인 아이템 상세 정보를 넣을 수 있습니다. */}
          </div>
        )}
        <div>
          <h3>세트 메뉴 선택하기</h3>
        </div>
        {/* <h3>토핑 추가</h3> */}
        <Carousel responsive={responsive}>
          {productData.map((item) => (
            <SlideTopping
              key={item.id}
              item={item}
              quantityMap={quantityMap}
              handleQuantityChange={handleQuantityChange}
            />
          ))}
        </Carousel>
        <div className="check-btn">
          <button
            onClick={() => {
              setOpen(false);
              addToCart(selectedItem);
              selectedTopping(setSelectedTopping);
              handleMenuClick(selectedTopping);
            }}
            className="btn-yes"
          >
            확인
          </button>
          <button onClick={() => setOpen(false)} className="btn-no">
            취소
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default CustomModal;
