import "./App.css";
import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <span className="txt">{step}</span>
      <br />
      <button
        onClick={() => setCount(Number(count) - Number(step))}
        className="btn"
      >
        -
      </button>
      <input
        type="text"
        value={count}
        className="txt"
        onChange={(e) => setCount(Number(e.target.value))}
      ></input>
      <button
        onClick={() => setCount(Number(count) + Number(step))}
        className="btn"
      >
        +
      </button>
      <br />
      <span className="txt">
        {count} days from today is {date.toDateString()}
      </span>
    </div>
  );
}
