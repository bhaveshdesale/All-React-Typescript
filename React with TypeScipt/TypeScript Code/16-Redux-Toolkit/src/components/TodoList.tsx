import { useAppSelector } from '../hooks/reduxHooks'
import TodoItem from './TodoItem';


function TodoList() {
 const todos= useAppSelector((state)=> state.todo.todos);
  return (
    <div>
      {todos.map((todo)=>(
        <TodoItem key={todo.id} todo={todo}/>
      ))}
      
    </div>
  )
}

export default TodoList



