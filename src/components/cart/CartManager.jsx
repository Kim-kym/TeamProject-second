import React from "react";
import CartList from "./cartList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CartManager({ cart, removeFromCart, updateQuantity }) {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false); // 장바구니 열림/닫힘 상태
  const [paymentCompleted, setPaymentCompleted] = useState(false); // 결제 완료 상태
  // 결제 처리 함수
  const handlePayment = () => {
    setPaymentCompleted(false); // 결제 완료 상태로 변경
    setPaymentCompleted(true);
    setIsCartOpen(flase);
  };
  // 결제 완료 메시지 닫기
  const closePaymentMessage = () => {
    setIsCartOpen(false); // 장바구니를 닫기
     navigate("/")
  };
  // 장바구니 열 때 결제 상태 초기화
  const openCart = () => {
    setIsCartOpen(true);
    setPaymentCompleted(false); // 장바구니 열 때 결제 완료 상태 리셋
  };

  return (
    <div>
      {/* 장바구니 열기/닫기 버튼 */}
      <div
        className={`cart-container ${isCartOpen ? "open" : ""}`}
        onClick={openCart}
      >
        <span>장바구니</span>
      </div>

      {/* 장바구니 리스트 */}
      {isCartOpen && (
        <div className="cartCss">
          <CartList
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            paymentCompleted={paymentCompleted}
            handlePayment={handlePayment}
            closePaymentMessage={closePaymentMessage}
          />
        </div>
      )}
    </div>
  );
}

export default CartManager;
