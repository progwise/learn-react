import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TodoItem } from "../TodoApp/useTodo";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/todos/" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<TodoItem[], {}>({
      query: () => ``,
    }),
    addTodo: builder.mutation<TodoItem, TodoItem>({
      query: (todo) => ({
        url: "/",
        method: "POST",
        body: todo,
      }),
    }),
  }),
});

export const { useGetAllTodosQuery, useAddTodoMutation } = todoApi;
