export interface TodoItem {
  id: string;
  title: string;
  done: boolean;
}

export const todos: TodoItem[] = [
  {
    id: "1",
    title: "Dish washing",
    done: false,
  },
  {
    id: "2",
    title: "Buying groceries",
    done: false,
  },
];
