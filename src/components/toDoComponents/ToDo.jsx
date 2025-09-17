import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";



export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setShowForm(false);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="font-inter max-w-3xl mx-auto bg-purple-800 text-white rounded-xl shadow-lg p-6">
      <h1 className="mb-2 text-center text-4xl font-bold pb-5">To Do List</h1>

      <div className="flex justify-between items-center gap-2 pb-5">
        <button
          className="bg-purple-400 hover:bg-purple-200 hover:text-purple-400 transition rounded-2xl w-10 h-10 shadow-lg font-bold text-xl"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "x" : "+"}
        </button>
      </div>

      {showForm && <ToDoForm onAddTask={addTask} />}

      <ToDoList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}