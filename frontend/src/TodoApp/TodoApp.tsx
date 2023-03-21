import LowPriority from "@mui/icons-material/LowPriority";
import PriorityHigh from "@mui/icons-material/PriorityHigh";
import {
  Box,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { axios } from "./axios";

enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high",
}
interface CreateFormState {
  title: string;
  description: string;
  priority: Priority;
}

interface TodoItem {
  id: number;
  title: string;
  description?: string;
  priority: Priority;
  done: boolean;
}

export const TodoApp = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const openTodos = todos.filter((todo) => todo.done === false);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting },
  } = useForm<CreateFormState>({
    defaultValues: { priority: Priority.Medium },
  });

  const fetchTodos = async () => {
    const response = await axios.get("/todos");
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleCreateSubmit = async (data: CreateFormState) => {
    await axios.post("/todos", data);
    await fetchTodos();

    reset();
  };

  return (
    <>
      <h2>
        Todos ({openTodos.length}/{todos.length})
      </h2>
      <Box marginY={2}>
        <Paper>
          <List>
            {todos.map((todo) => {
              return (
                <ListItem
                  key={todo.id}
                  disablePadding
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
                    <ListItemText
                      primary={todo.title}
                      secondary={todo.description}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </Box>

      <Box marginY={2}>
        <form onSubmit={handleSubmit(handleCreateSubmit)}>
          <TextField
            {...register("title")}
            label="Title"
            disabled={isSubmitting}
          />
          <TextField
            {...register("description")}
            label="Description"
            disabled={isSubmitting}
          />

          <Controller
            render={({ field }) => (
              <Select {...field} disabled={isSubmitting} label="Priority">
                <MenuItem value={Priority.High}>high</MenuItem>
                <MenuItem value={Priority.Medium}>medium</MenuItem>
                <MenuItem value={Priority.Low}>low</MenuItem>
              </Select>
            )}
            control={control}
            name="priority"
          />

          <Box marginY={2}>
            <Button
              type="submit"
              variant="contained"
              color="success"
              disabled={isSubmitting}
            >
              Create
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};
