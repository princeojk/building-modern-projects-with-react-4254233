import { useDispatch } from "react-redux";
import { markTodoAsCompleted, deleteTodo } from "./todosSLice";


export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted 
      ? <button onClick={() => dispatch(deleteTodo(todo.text))}>Delete</button>
      : <button onClick={() => dispatch(markTodoAsCompleted(todo.text))}>Complete</button>}
    </div>
  )
}