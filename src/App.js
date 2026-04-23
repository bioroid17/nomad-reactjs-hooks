import { useEffect, useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);
  const sayHello = () => console.log("hello");
  useEffect(sayHello, []);
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}
