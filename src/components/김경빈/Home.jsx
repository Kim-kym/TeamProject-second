import { useNavigate } from "react-router-dom";

function Home() {
  let orderOption = "";
  const navigate = useNavigate();

  const orderOptionSelect = (option) => {
    orderOption = option;
    pageChange();
  };

  const pageChange = () => {
    console.log(orderOption);
    navigate("/test", { state: { orderOption: orderOption } });
  };

  return (
    <div
      style={{
        // 배경 이미지
        backgroundImage: "url('/image/side/커여운 사진.jpg')", // 배경 소스
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
          style={{ width: "47vw", height: "45vw", marginRight: "0.8vw" }}
          onClick={() => orderOptionSelect("포장")}
        >
          포장
        </button>

        <button
          id="test"
          style={{ width: "47vw", height: "45vw" }}
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
  );
}
export default Home;
