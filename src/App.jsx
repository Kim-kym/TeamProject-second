//test code
import Home from "./components/김경빈/Home";
<<<<<<< HEAD
<<<<<<< HEAD
import Menu from "./components/김경빈/Menu";
=======
import Menu from "./components/김경빈/Menu"
>>>>>>> bin
// import MainHome from "./app/MainHome";
=======
import MainHome from "./app/mainHome";
>>>>>>> yyj2
// import Topping from "./app/Modal";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Menu />} />
      {/* <Route path="/test" element={<MainHome />} /> */}
      {/* <Route path="/choice" element={<Topping />} /> */}
      <Route path="/test" element={<MainHome />} />
      {/* <Route path="/choice" element={<Topping />} /> */}
    </Routes>
  );
}

export default App;
