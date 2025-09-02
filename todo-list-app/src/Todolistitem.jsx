export default function TodoListItem({ todo, onCompletedClicked, onDeleteCliked}) {
  return (
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted 
      ? <button onClick={() => onDeleteCliked(todo.text)}>Delete</button>
      : <button onClick={() => onCompletedClicked(todo.text)}>Complete</button>}
    </div>
  )
}