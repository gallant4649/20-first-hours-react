import { useState  } from "react";

export default function ToDoForm({ onAddTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAddTask(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-4 bg-purple-600 p-3 rounded-lg"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Apa yang ingin kamu lakukan?"
        className="flex-grow p-2 rounded-lg text-black"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-300 hover:text-blue-700 px-4 rounded-lg font-bold"
      >
        Tambah
      </button>
    </form>
  );
}