interface TodoListProps {
  task: {
    id: number;
    title: string;
    isCompleted: boolean;
  };
}

export function TodoList({ task }: TodoListProps) {
  return <li key={task.id}>{task.title}</li>;
}
