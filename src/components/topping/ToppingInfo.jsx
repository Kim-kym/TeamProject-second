import BugermenuList from "../menu/bugerMenu";
import hambuger from "/image/topping/hambuger.jpeg";

export default function ToppingInfo({ topping }) {
  //   const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(topping.price);

  const ClickCounter = (num) => {
    setQuantity((prev) => prev + num);
    setTotal((prev) => prev + topping.price * num);
  };

  return (
    <div className="App">
      {hambuger}
      <span>{BugermenuList.price}</span>
    </div>
  );
}
