import { FormEvent, useRef, useState } from "react";

interface TodoItem {
  id: number;
  title: string;
  description?: string;
}

export const TodoApp = () => {
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const inputDescriptionRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: Math.random(),
      title: "Buy groceries",
      description: "Milk, Cheese,...",
    },
    { id: Math.random(), title: "Clean up" },
  ]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newTaskTitle = inputTitleRef.current?.value;
    const newTaskDescription = inputDescriptionRef.current?.value;

    alert("submitted: " + newTaskTitle + " " + newTaskDescription);
  };

  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.title} {todo.description && ` - ${todo.description}`}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input ref={inputTitleRef} />
        <input ref={inputDescriptionRef} />
        <button type="submit">Create</button>
      </form>
    </>
  );
};
