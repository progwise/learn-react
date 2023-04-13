import { useEffect, useState } from "react";
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

export const NetworkExample = () => {
  const [todos, setTodos] = useState<TodoItem[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadTodos = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await networkClient.get<TodoItem[]>("/");
      setTodos(response.data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <>
      <h1>Network Example</h1>
      {loading && "Loading..."}
      {error && "Error"}
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button disabled={loading} onClick={loadTodos}>
        refetch
      </button>
    </>
  );
};
