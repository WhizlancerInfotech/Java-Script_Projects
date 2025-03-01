import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="p-4 text-center" style={{ backgroundColor: color, height: "100vh" }}>
      <h1 className="text-2xl">Pick a Color</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}
