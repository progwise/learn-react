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
import { DemoForm } from "./DemoForm";
import { NetworkExample } from "./NetworkExample";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <CounterContextProvider start={10}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <div
              style={{
                display: "flex",
                gap: "8px",
                backgroundColor: "#ddd",
                padding: "8px",
                borderRadius: "16px",
                flexWrap: "wrap",
              }}
            >
              <Link to="/">Todo App</Link>
              <Link to="/playground">Playground</Link>
              <Link to="/counter">Counter</Link>
              <Link to="/demo-form">DemoForm</Link>
              <Link to="/network-example">Network Example</Link>
              <UserMenu />
            </div>
            <Routes>
              <Route path="/" element={<TodoApp />} />
              <Route path="/playground" element={<App />} />
              <Route
                path="/counter"
                element={<Counter start={0} min={0} max={10} />}
              />
              <Route path="/demo-form" element={<DemoForm />} />
              <Route path="/network-example" element={<NetworkExample />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </CounterContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
