import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./index.css";
import { TodoApp } from "./TodoApp/TodoApp";
import { Provider } from "react-redux";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { store } from "./redux/stores";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/playground" element={<App />} />
            <Route path="/" element={<TodoApp />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
