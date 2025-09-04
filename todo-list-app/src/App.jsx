import './App.css';
import Todolist from './Todolist'

function App() {

  function createTodo(text) {
    setinCompletedTodos([...inCompletedTodos, {text , isCompleted: false}])
  }

  return (
    <>
      <Todolist 
      />
    </>
  )
}

export default App
