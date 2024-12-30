import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  let isVisible = false;
  let orderOption = "";
  const navigate = useNavigate();

  const orderOptionSelect = (option) => {
    orderOption = option;
    pageChange();
  };

  const pageChange = () => {
    console.log(orderOption);
    navigate("/test", { state: { orderOption: orderOption } });
    isVisible = true;
  };

  const handleClick = () => {
    isVisible = false;
  };

  return (
    <div>
      <div>
{isVisible && 
<div style={{backgroundColor : "white", height : "60%", width : "60%"}}>
  <p>{orderOption}</p>
  <p> 음료 수정</p>
  <p> 사이드 교체</p>
  <button onClick={() => handleClick()}>닫기</button>
</div>
}
</div>
    <div
      style={{
        // 배경 이미지
        backgroundImage: "url('/image/side/배경사진.jpg')", // 배경 소스
        height: "100%", // 화면 꽉 체움 (세로 기준)
        backgroundSize: "cover", // 이미지 비율 유지
      }}
    >
      <div
        style={{
          //상단 여유공간 확보 ( 나중에 로고 추가 )
          height: "40vw",
        }}
      ></div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          id="test" // 포장 버튼
          style={{
            width: "47vw",
            height: "45vw",
            marginRight: "0.8vw",
            backgroundColor: "rgb(249, 252, 69)",
            fontSize: "8vw",
            color: "rgb(44, 167, 248",
          }}
          onClick={() => orderOptionSelect("포장")}
        >
          포장
        </button>

        <button
          id="test"
          style={{
            width: "47vw",
            height: "45vw",
            backgroundColor: "rgb(44, 167, 248)",
            fontSize: "8vw",
            color: "rgb(249, 252, 69)",
          }}
          onClick={() => orderOptionSelect("매장")}
        >
          매장
        </button>
      </div>
      <div
        style={{
          //상단 여유공간 확보 ( 나중에 로고 추가 )
          height: "15vh",
        }}
      ></div>
    </div>
    </div>
  );
}
export default Home;
