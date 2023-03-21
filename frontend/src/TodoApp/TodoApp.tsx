import { Box } from "@mui/material";
import { TodoCreateForm } from "./TodoCreateForm";
import { TodoList } from "./TodoList";
import { useTodo } from "./useTodo";

export const TodoApp = () => {
  const [todos] = useTodo();

  const openTodos = todos.filter((todo) => todo.done === false);

  return (
    <>
      <h2>
        Todos ({openTodos.length}/{todos.length})
      </h2>
      <Box marginY={2}>
        <TodoList />
      </Box>

      <Box marginY={2}>
        <TodoCreateForm />
      </Box>
    </>
  );
};
