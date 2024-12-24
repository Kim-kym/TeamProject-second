import Modal from "../components/Modal";
import { useState } from "react";
import "../styled/Modal.css";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>hambuger</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div>
          <p>토핑 추가하기</p>
          <div>
            <button onClick={() => setOpen(false)}>닫기</button>
            <button onClick={() => setOpen(false)}>확인</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;