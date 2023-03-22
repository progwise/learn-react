import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { axios } from "./axios";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { Priority, TodoItem } from "./useTodo";

interface CreateFormState {
  title: string;
  description: string;
  priority: Priority;
}

export const TodoCreateForm = () => {
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

  return (
    <form onSubmit={handleSubmit(handleCreateSubmit)}>
      <TextField {...register("title")} label="Title" disabled={isSubmitting} />
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
  );
};
