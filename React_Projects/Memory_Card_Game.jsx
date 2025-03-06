import { useState } from "react";

const cards = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"];
const shuffledCards = [...cards, ...cards].sort(() => Math.random() - 0.5);

export default function MemoryGame() {
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  const handleFlip = (index) => {
    if (flipped.length === 2) return;
    setFlipped([...flipped, index]);

    if (flipped.length === 1 && shuffledCards[flipped[0]] === shuffledCards[index]) {
      setMatched([...matched, shuffledCards[index]]);
    }

    if (flipped.length === 1) setTimeout(() => setFlipped([]), 1000);
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {shuffledCards.map((card, index) => (
        <div
          key={index}
          className="w-16 h-16 flex items-center justify-center bg-gray-200 text-2xl cursor-pointer"
          onClick={() => handleFlip(index)}
        >
          {flipped.includes(index) || matched.includes(card) ? card : "❓"}
        </div>
      ))}
    </div>
  );
}
