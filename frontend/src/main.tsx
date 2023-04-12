import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import { TodoApp } from "./TodoApp";
import { UserContextProvider } from "./UserContext";
import { UserMenu } from "./UserMenu";
import { CounterContextProvider } from "./CounterContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <CounterContextProvider start={10}>
        <BrowserRouter>
          <div style={{ display: "flex", gap: "8px" }}>
            <Link to="/">Todo App</Link>
            <Link to="/playground">Playground</Link>
            <Link to="/counter">Counter</Link>
            <UserMenu />
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
      </CounterContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
