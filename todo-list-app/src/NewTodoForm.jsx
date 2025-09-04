import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createTodo } from './todosSLice';

export default function NewTodoForm({ onCreateClicked }) {
  const [inputText, setInputText]= useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" 
        value={inputText}
        onChange={e => setInputText(e.target.value)}/>
      <button onClick={() => {
        dispatch(createTodo(inputText))
      }} >create todo</button>
    </div>
  )
}