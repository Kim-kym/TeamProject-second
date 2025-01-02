import BasedModal from "./BasedModal";

function OptionSelectionModal({
  isOpen, // 변경: open → isOpen
  onClose, // 변경: setOpen → onClose
  title,
  options,
  selectedOptions = [],
  setSelectedOptions,
  onConfirm,
}) {
  const handleOptionChange = (option) => {
    setSelectedOptions([option]); // 단일 선택 유지
  };

  return (
    <BasedModal isOpen={isOpen} onClose={onClose}>
      <div>
        <h3>{title}</h3>
        {options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </label>
        ))}
        <button onClick={() => onConfirm(selectedOptions)}>확인</button>
        <button onClick={onClose}>취소</button>
      </div>
    </BasedModal>
  );
}

export default OptionSelectionModal;
