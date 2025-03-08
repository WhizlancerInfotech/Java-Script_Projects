import { useState } from "react";

export default function TaskBot() {
  const [url, setUrl] = useState("");

  const startAutomation = async () => {
    await fetch("http://localhost:5000/automate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
  };

  return (
    <div>
      <input onChange={(e) => setUrl(e.target.value)} placeholder="Website URL" className="border p-2" />
      <button onClick={startAutomation} className="ml-2 p-2 bg-blue-500 text-white">Start Automation</button>
    </div>
  );
}
