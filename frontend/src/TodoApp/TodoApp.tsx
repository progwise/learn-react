import { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface CreateFormState {
  title: string;
  description: string;
}

interface TodoItem {
  id: number;
  title: string;
  description?: string;
}

export const TodoApp = () => {
  // const inputTitleRef = useRef<HTMLInputElement>(null);
  // const inputDescriptionRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: Math.random(),
      title: "Buy groceries",
      description: "Milk, Cheese,...",
    },
    { id: Math.random(), title: "Clean up" },
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
              {todo.title} {todo.description && ` - ${todo.description}`}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit(handleCreateSubmit)}>
        <input {...register("title")} disabled={isSubmitting} />
        <input {...register("description")} disabled={isSubmitting} />
        <button type="submit" disabled={isSubmitting}>
          Create
        </button>
      </form>
    </>
  );
};
