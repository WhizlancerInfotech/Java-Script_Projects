import { useState } from "react";

export default function RockPaperScissors() {
  const choices = ["Rock", "Paper", "Scissors"];
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(randomChoice);

    if (choice === randomChoice) {
      setResult("It's a Tie!");
    } else if (
      (choice === "Rock" && randomChoice === "Scissors") ||
      (choice === "Paper" && randomChoice === "Rock") ||
      (choice === "Scissors" && randomChoice === "Paper")
    ) {
      setResult("You Win!");
    } else {
      setResult("You Lose!");
    }
  };

  return (
    <div className="p-4">
      <h2>Rock Paper Scissors</h2>
      <div>
        {choices.map((choice) => (
          <button key={choice} onClick={() => playGame(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <p>You chose: {playerChoice}</p>
      <p>Computer chose: {computerChoice}</p>
      <h3>{result}</h3>
    </div>
  );
}
