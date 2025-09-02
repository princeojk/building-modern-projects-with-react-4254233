import { useState } from 'react';
import './App.css';
import Todolist from './Todolist'

function App() {
  const [completedTodos, setCompletedTodos] = useState([
    {
      text: "Take out the garbage", isCompleted: true
    },
    {text: "Make dinner", isCompleted: true}
  ]);
  const [inCompletedTodos, setinCompletedTodos] = useState([
    {text: "Paint the house", isCompleted: false}
  ]);
   
  function markTodoAsComplete(text) {
    setinCompletedTodos(inCompletedTodos.filter(t => 
      t.text !== text
    ));
    setCompletedTodos([...completedTodos, { ...inCompletedTodos.find(t => t.text == text), isCompleted: true}])
  }

  function deleteTodo(text) {
    setCompletedTodos(completedTodos.filter(t => t.text !== text))
  }

  function createTodo(text) {
    setinCompletedTodos([...inCompletedTodos, {text , isCompleted: false}])
  }

  return (
    <>
      <Todolist 
      completedTodos={completedTodos} 
      incompletedTodos={inCompletedTodos}
      onCompletedClicked={markTodoAsComplete}
      onDeleteCliked={deleteTodo}
      onCreateClicked={createTodo}
      />
    </>
  )
}

export default App
