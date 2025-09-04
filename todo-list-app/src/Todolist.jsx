import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./Todolistitem";

export default function Todolist() {
  const todos = useSelector(state => state.todos.value);

  return (
    <div>
      <h1>My todos</h1>
      <NewTodoForm/>
      <h3>completed:</h3>
      {todos.map((todo, index) => (
        <TodoListItem 
          todo={todo}   
          key={index} 
        />
      ))}
      <h3>Incomplete:</h3>
      {todos.map((todo, index) => (
        <TodoListItem 
          todo={todo} 
          key={index} 
        />
      ))}
    </div>

  );
}