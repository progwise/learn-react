import LowPriority from "@mui/icons-material/LowPriority";
import PriorityHigh from "@mui/icons-material/PriorityHigh";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { useMutation, useQueryClient } from "react-query";
import { axios } from "../axios";
import { Priority, TodoItem } from "../useTodo";

interface TodoListItemProps {
  todo: TodoItem;
}

export const TodoListItem = ({ todo }: TodoListItemProps) => {
  const queryClient = useQueryClient();
  const toggleTodoMutation = useMutation(
    "todo-toggle",
    async (todo: TodoItem) => {
      const response = await axios.put<true>(`/todos/${todo.id}`, {
        ...todo,
        done: !todo.done,
      });
      return response.data;
    },
    { onSuccess: () => queryClient.invalidateQueries() }
  );

  return (
    <ListItem
      key={todo.id}
      disablePadding
      onClick={() => toggleTodoMutation.mutate(todo)}
      secondaryAction={
        {
          [Priority.High]: <PriorityHigh />,
          [Priority.Medium]: "",
          [Priority.Low]: <LowPriority />,
        }[todo.priority]
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <Checkbox checked={todo.done} />
        </ListItemIcon>
        <ListItemText primary={todo.title} secondary={todo.description} />
      </ListItemButton>
    </ListItem>
  );
};
