import "../../styled/Modal.css";
// import ReactDOM from "react-dom";

const BasedModal = ({ isOpen, onClose, children }) => {
  console.log("BasedModal: isOpen:", isOpen);

  if (!isOpen) {
    console.log("BasedModal is not open.");
    return null;
  }

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
