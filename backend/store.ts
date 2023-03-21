enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high",
}

export interface TodoItem {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  done: boolean;
}

export const todos: TodoItem[] = [
  {
    id: "1",
    title: "Dish washing",
    priority: Priority.Medium,
    done: false,
  },
  {
    id: "2",
    title: "Buying groceries",
    priority: Priority.High,
    done: false,
  },
];
