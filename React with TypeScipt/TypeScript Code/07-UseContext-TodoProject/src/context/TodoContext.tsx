import {createContext,useContext,useState} from "react";

import {type Todo,type TodoContextType,} from "../types/todo";

const TodoContext =createContext<TodoContextType | undefined>(undefined);

interface TodoProviderProps {
  children: React.ReactNode;
}

export function TodoProvider({children,}: TodoProviderProps) {
  
  const [todos, setTodos] =useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prev) => [...prev,newTodo,])};

  const deleteTodo = ( id: number) => {
    setTodos((prev) =>prev.filter( (todo) =>todo.id !== id))};

  const toggleTodo = ( id: number) => {
    setTodos((prev) =>prev.map((todo) =>todo.id === id ? { ...todo,completed:!todo.completed}: todo ))};

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodo = () => {
  const context =
    useContext(TodoContext);

  if (!context) {
    throw new Error(
      "useTodo must be used inside TodoProvider"
    );
  }

  return context;
};