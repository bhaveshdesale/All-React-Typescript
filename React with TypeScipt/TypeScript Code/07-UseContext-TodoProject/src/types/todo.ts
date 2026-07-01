export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoContextType {
  todos: Todo[];

  addTodo: (
    text: string
  ) => void;

  deleteTodo: (
    id: number
  ) => void;

  toggleTodo: (
    id: number
  ) => void;
}