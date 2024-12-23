import React from "react";
import "../styled/mainHome.css";

function Category({ setCurrentMenu }) {
  return (
    <div>
      {/* 버튼 목록 생성 */}
      <button onClick={() => setCurrentMenu("burger")}>햄버거</button>
      <button onClick={() => setCurrentMenu("drink")}>음료</button>
      <button onClick={() => setCurrentMenu("coffee")}>커피</button>
      <button onClick={() => setCurrentMenu("side")}>사이드</button>
    </div>
  );
}

export default Category;
