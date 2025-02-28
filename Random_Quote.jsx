import { useState, useEffect } from "react";

export default function QuoteGenerator() {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuote(data.content);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="p-4">
      <p>{quote}</p>
      <button className="bg-blue-500 px-3 py-2 text-white" onClick={fetchQuote}>
        New Quote
      </button>
    </div>
  );
}
