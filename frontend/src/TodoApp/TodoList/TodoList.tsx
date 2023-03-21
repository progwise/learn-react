import { List, Paper } from "@mui/material";
import { useTodo } from "../useTodo";
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  const [todos] = useTodo();

  return (
    <Paper>
      <List>
        {todos.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo} />;
        })}
      </List>
    </Paper>
  );
};
