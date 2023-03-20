import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import { TodoApp } from "./TodoApp/TodoApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/playground" element={<App />} />
        <Route path="/" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
