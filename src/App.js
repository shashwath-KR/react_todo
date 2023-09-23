import React from 'react';
import './App.css';
import { useState } from 'react';
import {v4 as uuidv4} from "uuid";
import Edit from './edit';
uuidv4();


function App() {
  const[user, setUser] = useState("");
  const[todo, setTodo] = useState([]);
  const[editable, setEditable] = useState(false);
  const[ids, setIds] = useState(-1);

  const toDo = () => {
    let data = {
      id: uuidv4(),
      userData: user,
      completed: false,
      isEditing: editable
    }

    setTodo([...todo.concat(data)]);
    setUser("");
  }

  const submitRequest = (e) => {
    e.preventDefault();
     toDo()
  }

  const onEdit = (id) => {
     setTodo(todo.filter(todos => {
         if(todos.id === id) {
             setEditable(true)
             setIds(id)
         }
         return todos;
     }))
     console.log(id)
  }

  const onDelete = (id) => {
     setTodo(todo.filter(todos => todos.id !== id))
  }

 return (
    <div className="App">
      <div className='card'>
      <h1>Todo List</h1>
      <form onSubmit={submitRequest}>
     <input type='text' className='input' value={user} placeholder='enter' onChange={(e) => setUser(e.target.value)} required />
     <button className='submit'>submit</button>
     <button onClick={() => setTodo([])} className='submit'>Reset</button>
      </form>
        {
      todo.map((todos) => {

        const onSave = (e, num) => {
          e.preventDefault()
    setEditable(false)
    todos.userData = num;
  }

        return (
          ids === todos.id && editable === true ? <Edit key={todos.id} todos = {todos} 
          setEditable={setEditable} onSave= {onSave} />
           :
          <div className='product' key={todos.id}>
            <h2>{todos.userData}</h2>
            <div>
            <button className='btn' onClick={() => onEdit(todos.id)}>Edit</button>
            <button className='btn1' onClick={() => onDelete(todos.id)}>Delete</button>
            </div>
          </div> 
        )
      }) 
     }
      </div>
      </div>
  );
}


export default App;
