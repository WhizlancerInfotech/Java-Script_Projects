import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center p-5">
      <h1 className="text-2xl">{count}</h1>
      <button
        className="bg-green-500 px-3 py-2 text-white"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <button
        className="bg-red-500 px-3 py-2 text-white ml-2"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
    </div>
  );
}
