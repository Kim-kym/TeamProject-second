import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styled/Modal.css";
// import App from "./app/Modal"; 이렇게 2줄 주석
// import App from "./components/toppingslide";
// import App from "/src/app/mainHome.jsx";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
