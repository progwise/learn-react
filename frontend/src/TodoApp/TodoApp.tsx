import { Box, Button } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { TodoCreateForm } from "./TodoCreateForm";
import { TodoList } from "./TodoList";
import { TodoHeader } from "./TodoList/TodoHeader";
import { TodoItem, useTodo } from "./useTodo";

const getCountTitle = (count: number) => {
  // console.log("calculate", Date.now());
  return `Der Count is aktuell ${count}`;
};

export const TodoApp = () => {
  const [todos] = useTodo();
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const getCountTitle2 = useCallback(() => {
    // console.log("calculate2", Date.now());
    return `Der Count is aktuell ${count2}`;
  }, [count2]);

  const openTodos = useMemo(
    () => todos.filter((todo) => todo.done === false),
    [todos]
  );
  const countTitle = useMemo(() => getCountTitle(count), [count]);
  const countTitle2 = getCountTitle2();

  return (
    <>
      <TodoHeader openTodos={openTodos} allTodos={todos} />
      <Box marginY={2}>
        <TodoList />
      </Box>

      <Box marginY={2}>
        <TodoCreateForm />
      </Box>
      <Button onClick={() => setCount(count + 1)}>{countTitle}</Button>
      <Button onClick={() => setCount2(count2 + 1)}>{countTitle2}</Button>
    </>
  );
};
