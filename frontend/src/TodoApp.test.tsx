import { render, screen } from "@testing-library/react";
import { Priority, TodoApp } from "./TodoApp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

const todos = [
  {
    id: "1",
    title: "Dish washing",
    priority: Priority.MEDIUM,
    done: true,
  },
  {
    id: "2",
    title: "Buying groceries",
    priority: Priority.HIGH,
    done: false,
  },
];

const getTodosHandler = rest.get("/api/todos", (req, res, ctx) => {
  return res(ctx.json(todos));
});

const postTodoHandler = rest.post("/api/todos", async (req, res, ctx) => {
  const newTodo = await req.json();
  newTodo.id = (todos.length + 1).toString();
  todos.push(newTodo);

  return res(ctx.json(newTodo));
});

const mockServer = setupServer(getTodosHandler, postTodoHandler);

const wrapper = (props: { children: ReactNode }) => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>{props.children}</QueryClientProvider>
  );
};

beforeAll(() => {
  mockServer.listen();
});
afterAll(() => {
  mockServer.close();
});

afterEach(() => {
  mockServer.resetHandlers();
});

it("should load todos from backend", async () => {
  render(<TodoApp />, { wrapper });

  const listItems = await screen.findAllByRole("listitem");
  expect(listItems).toHaveLength(2);

  const todoTitleInput = screen.getByRole("textbox");
  const submitButton = screen.getByRole("button", { name: /Create/i });

  await user.type(todoTitleInput, "New Todo");
  await user.click(submitButton);

  expect(screen.queryAllByRole("listitem")).toHaveLength(3);

  screen.logTestingPlaygroundURL();
});
