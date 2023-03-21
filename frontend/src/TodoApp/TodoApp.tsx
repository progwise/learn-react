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
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

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
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: Math.random(),
      title: "Buy groceries",
      description: "Milk, Cheese,...",
      priority: Priority.High,
      done: false,
    },
    {
      id: Math.random(),
      title: "Clean up",
      priority: Priority.Medium,
      done: false,
    },
    {
      id: Math.random(),
      title: "Do nothing",
      priority: Priority.Low,
      done: true,
    },
  ]);
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

  const handleCreateSubmit = async (data: CreateFormState) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newTodos = [
      ...todos,
      {
        id: Math.random(),
        title: data.title,
        description: data.description,
        priority: data.priority,
        done: false,
      },
    ];

    setTodos(newTodos);
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
