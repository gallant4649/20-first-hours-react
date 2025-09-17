import { useState } from "react";

export default function ToDoItem({ task, onDelete }) {
  const [done, setDone] = useState(false);

  return (
    <li className="w-120 flex justify-between items-center bg-purple-500 px-3 py-2 rounded-lg">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={done}
          onChange={() => setDone(!done)}
          className="w-5 h-5 accent-purple-700 cursor-pointer rounded-lg"
        />
        <span className={done ? "line-through text-gray-300" : ""}>
          {task}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onDelete}
          className="text-red-300 hover:text-red-500"
        >
          <svg
            className="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z" />
          </svg>
        </button>
      </div>
    </li>
  );
}