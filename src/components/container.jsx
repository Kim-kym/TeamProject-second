import React from "react";

function Category() {
  // 버튼 목록을 배열로 관리
  const buttonList = ["햄버거", "음료", "사이드"];

  return (
    <div>
      <ul id="category">
        {buttonList.map((item, index) => (
          <li key={index}>
            <button>{item}</button>
          </li>
        ))}
      </ul>
      <ul>
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
