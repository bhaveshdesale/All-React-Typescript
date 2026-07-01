import "./App.css";
import { AddTodo, Todos } from "./components";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 p-10">
      <h1 className="text-3xl text-white font-bold">
        Redux Toolkit Todo App
      </h1>

      <AddTodo />

      <Todos />
    </div>
  );
}

export default App;