import {
  useTodo,
} from "../context/TodoContext";

import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } =
    useTodo();

  return (
    <ul>
      {todos.map(
        (todo) => (
          <TodoItem
            key={
              todo.id
            }
            todo={todo}
          />
        )
      )}
    </ul>
  );
}

export default TodoList;