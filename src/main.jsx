import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styled/Modal.css";
import App from "./app/Modal";
// import App from "./components/toppingslide";
// import App from "/src/app/mainHome.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
