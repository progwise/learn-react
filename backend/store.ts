enum Priority {
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
}

export interface TodoItem {
  id: string;
  title: string;
  priority: Priority;
  done: boolean;
}

export const todos: TodoItem[] = [
  {
    id: "1",
    title: "Dish washing",
    priority: Priority.MEDIUM,
    done: false,
  },
  {
    id: "2",
    title: "Buying groceries",
    priority: Priority.HIGH,
    done: false,
  },
];
