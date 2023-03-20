import { LowPriority, PriorityHigh } from "@mui/icons-material";
import {
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
}

export const TodoApp = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: Math.random(),
      title: "Buy groceries",
      description: "Milk, Cheese,...",
      priority: Priority.High,
    },
    { id: Math.random(), title: "Clean up", priority: Priority.Medium },
    { id: Math.random(), title: "Do nothing", priority: Priority.Low },
  ]);
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
      },
    ];

    setTodos(newTodos);
    reset();
  };

  return (
    <>
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
                    <Checkbox />
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

      <br />
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

        <br />
        <br />
        <div>
          <Button
            type="submit"
            variant="contained"
            color="success"
            disabled={isSubmitting}
          >
            Create
          </Button>
        </div>
      </form>
    </>
  );
};
