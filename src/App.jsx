//test code
import Home from "./components/김경빈/Home";
import Menu from "./components/김경빈/Menu"
// import MainHome from "./app/MainHome";
// import Topping from "./app/Modal";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Menu />} />
      {/* <Route path="/test" element={<MainHome />} /> */}
      {/* <Route path="/choice" element={<Topping />} /> */}
    </Routes>
  );
}

export default App;
