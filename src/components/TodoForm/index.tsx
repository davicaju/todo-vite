interface TodoFormProps {
  title: string;
  setTitle: (e: any) => void;
  onCreateTask: () => void;
}

export function TodoForm({ title, setTitle, onCreateTask }: TodoFormProps) {
  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => onCreateTask()}>add</button>
    </>
  );
}
