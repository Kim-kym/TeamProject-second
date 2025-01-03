import React from "react";
import BasedModal from "./BasedModal";

function OptionSelectionModal({
  open,
  setOpen,
  title,
  options,
  selectedOptions = "", // 기본값
  setSelectedOptions,
  onConfirm,
}) {
  const handleOptionChange = (option) => {
    // 단일 선택을 강제하도록 updateFn 호출
    setSelectedOptions(() => [option]);
  };

  return (
    <BasedModal isOpen={open} onClose={() => setOpen(false)}>
      <div>
        <h3>{title}</h3>
        <div>
          {options.map((option) => (
            <label key={option} style={{ display: "block", margin: "10px 0" }}>
              <input
                type="checkbox" // 유지된 체크박스 스타일
                value={option}
                checked={
                  Array.isArray(selectedOptions) &&
                  selectedOptions[0] === option
                } // 첫 번째 값과 비교
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => {
              if (!selectedOptions || selectedOptions.length === 0) {
                alert("옵션을 선택해주세요.");
                return;
              }
              onConfirm(selectedOptions); // 선택된 옵션 전달
              setOpen(false); // 모달 닫기
            }}
          >
            확인
          </button>
          <button onClick={() => setOpen(false)}>취소</button>
        </div>
      </div>
    </BasedModal>
  );
}

export default OptionSelectionModal;
