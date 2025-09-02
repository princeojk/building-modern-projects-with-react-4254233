import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./Todolistitem";

export default function Todolist({ completedTodos, incompletedTodos, onCompletedClicked, onDeleteCliked, onCreateClicked}) {
  return (
    <div>
      <h1>My todos</h1>
      <NewTodoForm onCreateClicked={onCreateClicked}/>
      <h3>completed:</h3>
      {completedTodos.map((todo, index) => (
        <TodoListItem 
          todo={todo}   
          key={index} 
          onDeleteCliked={onDeleteCliked}
        />
      ))}
      <h3>Incomplete:</h3>
      {incompletedTodos.map((todo, index) => (
        <TodoListItem 
          todo={todo} 
          key={index} 
          onCompletedClicked={onCompletedClicked}
        />
      ))}
    </div>

  );
}