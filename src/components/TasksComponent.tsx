interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TasksProps {
  tasks: Task[];
  toggleComplete: (id: number) => void;
  removeTask: (id: number) => void;
}

export default function TasksComponent({
  tasks,
  toggleComplete,
  removeTask,
}: TasksProps) {
  return (
    <div className="w-full max-w-sm p-4 space-y-3">
      {tasks.length === 0 && (
        <p className="text-center text-red-500 italic">
          No tasks yet. Add one!
        </p>
      )}

      {tasks.map((task) => (
        <div
          key={task.id}
          className={`flex justify-between items-center p-3 rounded-lg border shadow-md transition-all ${
            task.completed
              ? "bg-red-200 border-red-300 text-red-700 line-through"
              : "bg-white border-red-200 text-red-700"
          }`}
        >
          <span className="flex-1 px-2">{task.text}</span>

          {/* Complete Button */}
          <button
            onClick={() => toggleComplete(task.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-md shadow-sm hover:bg-red-600 transition transform hover:scale-105 active:scale-95"
          >
            {task.completed ? "Undo" : "Done"}
          </button>

          {/* Remove Button */}
          <button
            onClick={() => removeTask(task.id)}
            className="ml-2 bg-gradient-to-r from-red-400 to-red-600 text-white px-3 py-1 rounded-md shadow-sm hover:from-red-500 hover:to-red-700 transition transform hover:scale-105 active:scale-95"
          >
            ✖
          </button>
        </div>
      ))}
    </div>
  );
}
