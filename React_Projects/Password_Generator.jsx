import { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let pass = "";
    for (let i = 0; i < 10; i++) pass += chars.charAt(Math.floor(Math.random() * chars.length));
    setPassword(pass);
  };

  return (
    <div>
      <h2>Password: {password}</h2>
      <button onClick={generatePassword}>Generate</button>
    </div>
  );
}
