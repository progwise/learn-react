import React from "react";
import { TodoItem } from "../useTodo";

interface TodoHeaderProps {
  openTodos: TodoItem[];
  allTodos: TodoItem[];
}

export const TodoHeader = React.memo(
  ({ openTodos, allTodos }: TodoHeaderProps) => {
    console.log("rerender Todo Header", Date.now());
    return (
      <h2>
        Todos ({openTodos.length}/{allTodos.length})
      </h2>
    );
  }
  // (prevProps, nextProps) => {
  //   if (prevProps.allTodos.length !== nextProps.allTodos.length) {
  //     return false;
  //   }

  //   if (prevProps.openTodos.length !== nextProps.openTodos.length) {
  //     return false;
  //   }

  //   return true;
  // }
);
