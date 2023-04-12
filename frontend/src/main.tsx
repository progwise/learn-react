import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import { TodoApp } from "./TodoApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div style={{ display: "flex", gap: "8px" }}>
        <Link to="/">Todo App</Link>
        <Link to="/playground">Playground</Link>
        <Link to="/counter">Counter</Link>
      </div>
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/playground" element={<App />} />
        <Route
          path="/counter"
          element={<Counter start={0} min={0} max={10} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
