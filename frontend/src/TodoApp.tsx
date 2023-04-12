import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

enum Priority {
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
}

interface TodoItem {
  title: string;
  priority: Priority;
}

const CreateTodoSchema = z.object({
  title: z.string().trim().min(1, "mindestens 1 Zeichen").max(100),
  priority: z.nativeEnum(Priority),
});

export const TodoApp = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { title: "Buy groceries", priority: Priority.MEDIUM },
  ]);

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<TodoItem>({ resolver: zodResolver(CreateTodoSchema) });

  const handleCreateSubmit = async (data: TodoItem) => {
    const newTodos = [...todos, data];
    setTodos(newTodos);

    reset();
  };

  return (
    <>
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>
            <input type="checkbox" /> {todo.title} ({todo.priority})
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit(handleCreateSubmit)}>
        <input
          {...register("title", { minLength: 1, maxLength: 100 })}
          disabled={isSubmitting}
        />{" "}
        {errors.title?.message}{" "}
        <select {...register("priority")} disabled={isSubmitting}>
          <option value={Priority.HIGH}>High</option>
          <option value={Priority.MEDIUM}>Medium</option>
          <option value={Priority.LOW}>Low</option>
        </select>{" "}
        {errors.priority?.message}{" "}
        <button type="submit" disabled={isSubmitting}>
          Create
        </button>
      </form>
    </>
  );
};
