// import React from "react";
// import "./Menu.css";
import Category from "./components/Container";
import Cart from "./components/Cart";
import { useState } from "react";
import "/src/App.css";
import logo from "/src/image/buger1.jpg";

function App() {
  // const [CategoryList, setCategoryList] = useState("");
  return (
    <div>
      <h1>
        <img src={logo} alt="Krusty Krab Logo" style={{ width: "150px" }} />
        Krusty Krab
      </h1>
      <Category />
      <Cart />
    </div>
  );
}
