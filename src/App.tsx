import { useState } from "react";

import { Header, TodoForm, TodoList } from "./components";

import "./styles/global.scss";

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
};

export function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateTask() {
    const task = {
      id: tasks.length + 1,
      title,
      isCompleted: false,
    };

    if (!title) return;

    const newTasks = [...tasks, task];
    setTasks(newTasks);
    setTitle("");
  }

  function handleDeleteTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  }

  return (
    <div className="App">
      <Header />
      <TodoForm
        title={title}
        setTitle={setTitle}
        onCreateTask={handleCreateTask}
      />
      {tasks.map((task) => (
        <ul>
          <TodoList task={task} onDeleteTask={handleDeleteTask} />
        </ul>
      ))}
    </div>
  );
}
