import React from "react";

function BurgerMenuList({
  burgerMenuList,
  addToCart,
  onMenuClick,
  isToppingModalOpen,
}) {
  const formatPrice = (price) => price.toLocaleString("ko-KR");
  console.log("모달 상태: ", isToppingModalOpen);
  // 특정 항목을 클릭했을 때 동작하는 함수
  // const handleClick = (item) => {
  //   console.log(`${item.name}을(를) 클릭했습니다!`);
  //   alert(`${item.name}를 장바구니에 담았습니다.`);
  // };

  return (
    <ul>
      {burgerMenuList.map((item) => (
        <li key={item.id} onClick={() => addToCart(item)}>
          <img
            src={item.imgurl}
            alt={item.name}
            style={{ width: "100px", height: "100px" }}
          />
          <p>{item.name}</p>
          <p>가격: {formatPrice(item.price)} 원</p>
          <p>알레르기: {item.allergy}</p>
          {/* <button onClick={() => addToCart(item)}>장바구니에 담기</button> */}
        </li>
      ))}
    </ul>
    // <div>
    //   <h2>버거 메뉴</h2>
    //   <ul>
    //     {burgerMenuList.map((item) => (
    //       <li key={item.id} onClick={() => addToCart(item)}>
    //         <img src={item.imgurl} alt={item.name} style={{ width: "50px" }} />
    //         {item.name} - {item.price}원
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default BurgerMenuList;
