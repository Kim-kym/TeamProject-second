import { useEffect, useState } from "react";

export default function QuantityInput({ stock, quantity, onClick, onBlur }) {
  const [value, setValue] = useState(quantity);

  const handleChangeInput = (e) => {
    const newValue = parseInt(e.target.value);

    if (isNaN(newValue) || newValue < 1) {
      setValue(1);
    } else {
      setValue(newValue);
    }
  };

  const handleBlurInput = (e) => {
    let newValue = parseInt(e.target.value);

    if (stock < newValue) {
      newValue = stock;
    }
    setValue(newValue);
    onBlur(newValue);
  };

  return (
    <div>
      <button onClick={() => onClick(-1)}></button>
      <label>
        <span>상품</span>
        <input
          min={1}
          value={value}
          max={stock}
          onChange={handleChangeInput}
          onBlur={handleBlurInput}
        />
      </label>
      <button onClick={() => onClick(1)}></button>
    </div>
  );
}
