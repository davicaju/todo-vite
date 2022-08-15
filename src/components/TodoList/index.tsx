interface TodoListProps {
  task: {
    id: number;
    title: string;
    isCompleted: boolean;
  };
  onDeleteTask: (id: number) => void;
}

export function TodoList({ task, onDeleteTask }: TodoListProps) {
  return (
    <li key={task.id}>
      {task.title} <button onClick={() => onDeleteTask(task.id)}>delete</button>
    </li>
  );
}
