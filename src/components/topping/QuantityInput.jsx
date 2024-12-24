export default function QuantityInput({ stock, quantity, onClick }) {
  return (
    <Wrapper>
      <Counter>
        <button
          type="button"
          aria-label="수량 내리기"
          onClick={() => onClick(-1)}
        ></button>
        <label>
          <span className="ally=hidden">상품 주문 수량</span>
          <input type="number" min={0} value={quantity} max={stock} readOnly />
        </label>
        <button
          type="button"
          aria-label="수량 올리기"
          onClick={() => onClick(1)}
        ></button>
      </Counter>
    </Wrapper>
  );
}
