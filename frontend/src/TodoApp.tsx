import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface CreateTodoForm {
  title: string;
}

const CreateTodoSchema = z.object({
  title: z.string().trim().min(1, "mindestens 1 Zeichen").max(100),
});

export const TodoApp = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<CreateTodoForm>({ resolver: zodResolver(CreateTodoSchema) });

  const handleCreateSubmit = async (data: CreateTodoForm) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  };

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit(handleCreateSubmit)}>
        <input
          {...register("title", { minLength: 1, maxLength: 100 })}
          disabled={isSubmitting}
        />{" "}
        {errors.title?.message}{" "}
        <button type="submit" disabled={isSubmitting}>
          Create
        </button>
      </form>
    </>
  );
};
