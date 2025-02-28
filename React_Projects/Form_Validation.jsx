import { useState } from "react";

export default function FormValidation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!email.includes("@")) {
      setError("Invalid email address");
    } else {
      setError("");
      alert("Form submitted");
    }
  };

  return (
    <div className="p-4">
      <input className="border p-2" onChange={(e) => setEmail(e.target.value)} />
      <button className="ml-2 p-2 bg-blue-500 text-white" onClick={validate}>
        Submit
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
