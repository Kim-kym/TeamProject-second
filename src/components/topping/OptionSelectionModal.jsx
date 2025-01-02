import React from "react";
import Modal from "./Modal";

function OptionSelectionModal({
  open,
  setOpen,
  title,
  options,
  selectedOptions = [], //   기본값을 빈 배열로 설정
  setSelectedOptions,
  onConfirm,
}) {
  const handleOptionChange = (option) => {
    setSelectedOptions((prev) => {
      if (!Array.isArray(prev)) return [option];

      // 새 옵션 선택 시 기존 옵션 제거 후 새 옵션 추가 (단일 선택)
      if (!prev.includes(option)) {
        return [option]; // 기존 선택 제거하고 새 옵션으로 대체
      }

      // 동일한 옵션 클릭 시 선택 해제
      return [];
    });
  };
  return (
    <Modal isOpen={open} onClose={() => setOpen(false)}>
      <div>
        <h3>{title}</h3>
        <div>
          {options.map((option) => (
            <label key={option} style={{ display: "block", margin: "10px 0" }}>
              <input
                type="checkbox"
                value={option}
                //  상태와 동기화
                checked={
                  Array.isArray(selectedOptions) &&
                  selectedOptions.includes(option) // 배열 여부 확인}
                }
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => onConfirm(selectedOptions)}>확인</button>
          <button onClick={() => setOpen(false)}>취소</button>
        </div>
      </div>
    </Modal>
  );
}

export default OptionSelectionModal;
