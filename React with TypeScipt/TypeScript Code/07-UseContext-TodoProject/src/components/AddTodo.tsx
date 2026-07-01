import {
  useState,
} from "react";

import {
  useTodo,
} from "../context/TodoContext";

function AddTodo() {
  const [input, setInput] =
    useState<string>("");

  const { addTodo,  } =
    useTodo();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !input.trim()
    )
      return;

    addTodo(input);

    setInput("");
  };

  return (
    <form
      onSubmit={
        handleSubmit
      }
    >
      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={(e) =>
          setInput(
            e.target.value
          )
        }
      />

      <button
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;