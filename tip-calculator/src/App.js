import { useState } from "react";
import "./App.css";

export default function App() {
  const [bill, setBill] = useState(0);
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function calcTip() {
    return bill * ((friendTip + yourTip) / 100);
  }

  function reset() {
    setBill(0);
    setYourTip(0);
    setFriendTip(0);
  }

  return (
    <div className="container">
      <BillAmount bill={bill} onSetBill={setBill} />
      <Tip value={yourTip} onSetTip={setYourTip}>
        How did you like the service?
      </Tip>
      <Tip value={friendTip} onSetTip={setFriendTip}>
        How did your friend like the service?
      </Tip>
      <Total bill={bill} onCalcTip={calcTip} />
      <Reset onReset={reset} />
    </div>
  );
}

function BillAmount({ bill, onSetBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(e.target.value)}
      ></input>
    </div>
  );
}

function Tip({ value, onSetTip, children }) {
  return (
    <div>
      <span>{children}</span>
      <select value={value} onChange={(e) => onSetTip(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Total({ bill, onCalcTip }) {
  return (
    <p className="total">
      You pay ${Number(bill) + Number(onCalcTip())} (${bill} + ${onCalcTip()}{" "}
      tip)
    </p>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button
        onClick={() => {
          onReset();
        }}
      >
        Reset
      </button>
    </div>
  );
}
