import { useEffect, useState } from "react";
import { useQuery } from "react-query";
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
  const { data, refetch } = useQuery("todos", async () => {
    const response = await axios.get<TodoItem[]>("/todos");
    return response.data;
  });

  return [
    data ?? [],
    async () => {
      await refetch();
    },
  ];
};
