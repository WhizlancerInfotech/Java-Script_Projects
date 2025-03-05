import { useState, useEffect } from "react";

export default function CurrencyConverter() {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState(0);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => setRates(data.rates));
  }, []);

  return (
    <div>
      <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} />
      <h2>Converted: {(amount * (rates["EUR"] || 1)).toFixed(2)} EUR</h2>
    </div>
  );
}
