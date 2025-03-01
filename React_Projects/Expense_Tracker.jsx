import { useState } from "react";

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (description && amount) {
      setExpenses([...expenses, { description, amount }]);
      setDescription("");
      setAmount("");
    }
  };

  const removeExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <input
        className="border p-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="border p-2 ml-2"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="ml-2 p-2 bg-blue-500 text-white" onClick={addExpense}>
        Add Expense
      </button>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index} className="mt-2 flex justify-between">
            {expense.description} - ${expense.amount}
            <button
              className="bg-red-500 text-white px-2"
              onClick={() => removeExpense(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
