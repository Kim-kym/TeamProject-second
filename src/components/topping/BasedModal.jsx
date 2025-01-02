// import "../../styled/Modal.css";
// import ReactDOM from "react-dom";

const BasedModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <div onClick={onClose} className="modal-close"></div>
        {children}
      </div>
    </div>
  );
};

export default BasedModal;
