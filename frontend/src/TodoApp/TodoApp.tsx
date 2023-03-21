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
import { useMutation, useQueryClient } from "react-query";
import { axios } from "./axios";
import { Priority, TodoItem, useTodo } from "./useTodo";

interface CreateFormState {
  title: string;
  description: string;
  priority: Priority;
}

export const TodoApp = () => {
  const [todos, refetchTodos] = useTodo();
  const queryClient = useQueryClient();
  const createTodoMutation = useMutation(
    "todo-create",
    async (data: CreateFormState) => {
      const response = await axios.post<TodoItem>("/todos", {
        ...data,
        done: false,
      });
      return response.data;
    },
    {
      onMutate: async (newTodo) => {
        const prevTodos = queryClient.getQueryData<TodoItem[]>("todos");
        const optimisticTodo: TodoItem = {
          ...newTodo,
          done: false,
          id: Math.random(),
        };
        queryClient.setQueryData<TodoItem[]>("todos", (prevTodos) => [
          ...(prevTodos ?? []),
          optimisticTodo,
        ]);
        return { prevTodos };
      },
      onError: (error, newTodo, context) => {
        queryClient.setQueryData("todos", context?.prevTodos);
      },
      onSettled: () => queryClient.invalidateQueries(),
    }
  );
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
    await createTodoMutation.mutateAsync(data);
    reset();
  };

  const handleTodoClick = async (todo: TodoItem) => {
    toggleTodoMutation.mutateAsync(todo);
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
                  <ListItemButton onClick={() => handleTodoClick(todo)}>
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
