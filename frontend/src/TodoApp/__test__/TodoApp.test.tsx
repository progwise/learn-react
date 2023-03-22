import { TodoApp } from "../TodoApp";
import { render, screen, waitFor } from "@testing-library/react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Priority, TodoItem } from "../useTodo";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

const initTodo: TodoItem[] = [
  {
    id: 1,
    done: false,
    title: "Todo 1",
    priority: Priority.High,
  },
  {
    id: 2,
    done: true,
    title: "Todo 2",
    priority: Priority.High,
  },
];

let allTodo = [...initTodo];

const server = setupServer(
  rest.get("http://localhost:4000/todos", (_request, response, context) => {
    return response(context.json(allTodo));
  }),
  rest.post(
    "http://localhost:4000/todos",
    async (request, response, context) => {
      const newTodo: TodoItem = {
        ...(await request.json()),
        id: allTodo.length + 1,
        done: false,
      };
      allTodo.push(newTodo);
      return response(context.json(newTodo));
    }
  ),
  rest.put(
    "http://localhost:4000/todos/:id",
    async (request, response, context) => {
      const requestBody = await request.json();
      allTodo = allTodo.map((todo) => {
        if (todo.id.toString() === request.params.id) {
          return {
            ...todo,
            ...requestBody,
          };
        }

        return todo;
      });

      return response(context.json(true));
    }
  )
);

beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen();
});
afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close();
});

beforeEach(async () => {
  allTodo = [...initTodo];
});

const wrapper = ({ children }: { children: ReactNode }) => {
  const client = new QueryClient();
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

describe("TodoApp", () => {
  it("should display the correct amount of open and all todos", async () => {
    render(<TodoApp />, { wrapper });

    const header = screen.getByRole("heading");
    await waitFor(() => expect(header).toHaveTextContent("Todos (1/2)"));
  });

  it("should create a new todo", async () => {
    render(<TodoApp />, { wrapper });

    const titleInput = screen.getByRole("textbox", { name: "Title" });
    const submitButton = screen.getByRole("button", { name: "Create" });
    const header = screen.getByRole("heading");

    await user.type(titleInput, "New Todo");
    await user.click(submitButton);

    await waitFor(() => expect(header).toHaveTextContent("Todos (2/3)"));
  });

  it("should update a todo when clicking on it", async () => {
    render(<TodoApp />, { wrapper });
    const header = screen.getByRole("heading");

    const allTodoItems = await screen.findAllByRole("listitem");
    expect(allTodoItems).toHaveLength(2);

    await user.click(allTodoItems[0]);

    await waitFor(() => expect(header).toHaveTextContent("Todos (0/2)"));
  });
});
