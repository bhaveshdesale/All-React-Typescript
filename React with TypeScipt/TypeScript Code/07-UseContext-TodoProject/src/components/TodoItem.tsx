import {
  type Todo,
} from "../types/todo";

import {
  useTodo,
} from "../context/TodoContext";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo,}: TodoItemProps) {

  const { deleteTodo, toggleTodo,} = useTodo();

  return (
    <li>
      <span
        style={{
          textDecoration:
            todo.completed
              ? "line-through"
              : "none",
          cursor:
            "pointer",
        }}
        onClick={() => toggleTodo(todo.id) }>{todo.text}
        </span>

      <button
        onClick={() => deleteTodo( todo.id) } >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;