import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styled/Modal.css";
import Topping from "./app/Modal";
// import App from "./components/topping/Counter.jsx";
// import App from "./components/toppingslide";
// import App from "/src/app/MainHome.jsx";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
