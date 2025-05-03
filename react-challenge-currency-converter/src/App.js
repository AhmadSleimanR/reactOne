import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedAmount, setDebouncedAmount] = useState(amount);

  useEffect(() => {
    const timer = setTimeout(() => {
      const numValue = Number(amount) || 0;
      setDebouncedAmount(numValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [amount]);

  useEffect(() => {
    const controller = new AbortController();

    if (fromCurrency === toCurrency || debouncedAmount === 0) {
      setTotal(0);
      return;
    }

    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${debouncedAmount}&from=${fromCurrency}&to=${toCurrency}`,
          { signal: controller.signal }
        );
        if (!res.ok) {
          throw new Error(`Response status: ${res.status}`);
        }
        const data = await res.json();
        setTotal(data.rates[toCurrency]);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [debouncedAmount, fromCurrency, toCurrency]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        disabled={isLoading}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{total}</p>
    </div>
  );
}
