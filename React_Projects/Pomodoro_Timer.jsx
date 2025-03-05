import { useState, useEffect } from "react";

export default function PomodoroTimer() {
  const [time, setTime] = useState(1500); // 25 minutes
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running && time > 0) {
      const interval = setInterval(() => setTime(time - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [running, time]);

  return (
    <div>
      <h2>{Math.floor(time / 60)}:{time % 60}</h2>
      <button onClick={() => setRunning(!running)}>{running ? "Pause" : "Start"}</button>
    </div>
  );
}
