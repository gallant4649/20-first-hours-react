import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, onDelete }) {
  return (
    <ul className="space-y-2 text-white">
      {tasks.map((task, index) => (
        <ToDoItem key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
}