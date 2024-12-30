//test code
import Home from "./components/kimgyeongbin/Home";
// import MainHome from "./app/MainHome";
import MainHome from "./app/mainHome";
// import Topping from "./app/Modal";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<MainHome />} />
      {/* <Route path="/choice" element={<Topping />} /> */}
    </Routes>
  );
}

export default App;
