import Modal from "../components/Modal";
import { useState } from "react";
import "../styled/Modal.css";
// import Carousel from "react-multi-carousel";
// import Slide from "../components/toppingslide";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>hambuger</button>
      <Modal isOpen={open} onClose={() => setOpen(false)} className="Modal">
        <div>
          <p>토핑 추가하기</p>
          {/* <Slide /> */}
          <div className="btn-modal">
            <button onClick={() => setOpen(false)}>확인</button>
            <button onClick={() => setOpen(false)}>닫기</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
