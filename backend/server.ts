import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { TodoItem, todos } from "./store";

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = req.body as TodoItem;
  newTodo.id = (todos.length + 1).toString();
  todos.push(newTodo);
  res.send(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const todoItem = req.body as TodoItem;
  const todoId = req.params["id"];
  const todo = todos.find((item) => item.id === todoId);
  if (!todo) {
    res.sendStatus(404);
  } else {
    todo.title = todoItem.title;
    todo.done = todoItem.done;
    res.send(true);
  }
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
