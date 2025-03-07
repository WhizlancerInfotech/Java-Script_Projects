import { useState, useEffect } from "react";

export default function SnakeGame() {
  const [snake, setSnake] = useState([{ x: 5, y: 5 }]);
  const [food, setFood] = useState({ x: 10, y: 10 });
  const [direction, setDirection] = useState("RIGHT");

  useEffect(() => {
    const moveSnake = () => {
      setSnake((prev) => {
        let newSnake = [...prev];
        let head = { ...newSnake[0] };

        if (direction === "UP") head.y -= 1;
        if (direction === "DOWN") head.y += 1;
        if (direction === "LEFT") head.x -= 1;
        if (direction === "RIGHT") head.x += 1;

        newSnake.unshift(head);
        newSnake.pop();
        return newSnake;
      });
    };

    const gameLoop = setInterval(moveSnake, 200);
    return () => clearInterval(gameLoop);
  }, [direction]);

  return <h2>🚀 Snake Game 🚀</h2>;
}
