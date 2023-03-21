import { useEffect, useState } from "react";
import { axios } from "./axios";

export enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high",
}

export interface TodoItem {
  id: number;
  title: string;
  description?: string;
  priority: Priority;
  done: boolean;
}

type UseTodoReturn = [TodoItem[], () => Promise<void>];

export const useTodo = (): UseTodoReturn => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const refetchTodos = async () => {
    const response = await axios.get("/todos");
    setTodos(response.data);
  };

  useEffect(() => {
    refetchTodos();
  }, []);

  return [todos, refetchTodos];
};
