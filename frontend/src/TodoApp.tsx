import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { networkClient } from "./networkClient";

enum Priority {
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
}

export interface TodoItem {
  id: string;
  title: string;
  priority: Priority;
  done: boolean;
}

const CreateTodoSchema = z.object({
  title: z.string().trim().min(1, "mindestens 1 Zeichen").max(100),
  priority: z.nativeEnum(Priority),
});

const loadTodos = async () => {
  const response = await networkClient.get<TodoItem[]>("/");
  return response.data;
};

const createTodos = async (data: TodoItem) => {
  const response = await networkClient.post<TodoItem>("/", data);
  return response.data;
};

const updateTodo = async (data: TodoItem) => {
  const response = await networkClient.put<TodoItem>(`/${data.id}`, data);
  return response.data;
};

export const TodoApp = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: loadTodos,
  });
  const queryClient = useQueryClient();
  const createTodoMutation = useMutation({
    mutationKey: ["createTodo"],
    mutationFn: createTodos,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
  const updateTodoMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  console.log({ data, isLoading });

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<TodoItem>({ resolver: zodResolver(CreateTodoSchema) });

  const handleCreateSubmit = async (data: TodoItem) => {
    await createTodoMutation.mutateAsync({ ...data, done: false });
    reset();
  };

  const handleToggleDoneClick = (todoItem: TodoItem) => {
    const updatedTodoItem = { ...todoItem, done: !todoItem.done };
    updateTodoMutation.mutate(updatedTodoItem);
  };

  return (
    <>
      <h1>Todo App</h1>
      <ul>
        {data?.map((todo) => (
          <li key={todo.title}>
            <input
              type="checkbox"
              checked={todo.done}
              onClick={() => {
                handleToggleDoneClick(todo);
              }}
            />{" "}
            {todo.title} ({todo.priority})
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
