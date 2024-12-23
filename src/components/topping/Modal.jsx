const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div onClick={onClose} className="modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <button onClick={onClose} className="modal-close"></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
