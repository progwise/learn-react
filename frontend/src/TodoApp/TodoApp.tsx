import { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high",
}
interface CreateFormState {
  title: string;
  description: string;
  priority: Priority;
}

interface TodoItem {
  id: number;
  title: string;
  description?: string;
  priority: Priority;
}

export const TodoApp = () => {
  // const inputTitleRef = useRef<HTMLInputElement>(null);
  // const inputDescriptionRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: Math.random(),
      title: "Buy groceries",
      description: "Milk, Cheese,...",
      priority: Priority.High,
    },
    { id: Math.random(), title: "Clean up", priority: Priority.Medium },
  ]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<CreateFormState>();

  const handleCreateSubmit = async (data: CreateFormState) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newTodos = [
      ...todos,
      {
        id: Math.random(),
        title: data.title,
        description: data.description,
        priority: data.priority,
      },
    ];

    setTodos(newTodos);
    reset();
  };

  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.title} {todo.description && ` - ${todo.description}`} (
              {todo.priority})
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit(handleCreateSubmit)}>
        <input {...register("title")} disabled={isSubmitting} />
        <input {...register("description")} disabled={isSubmitting} />
        <select {...register("priority")}>
          <option value={Priority.High}>high</option>
          <option value={Priority.Medium}>medium</option>
          <option value={Priority.Low}>low</option>
        </select>
        <button type="submit" disabled={isSubmitting}>
          Create
        </button>
      </form>
    </>
  );
};
