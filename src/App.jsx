import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import AddTodo from './AddTodo';
import TodoItems from './TodoItems';

/* 
const initialData = [
  {
    id: 1,
    title: "hej",
    done: false
  },
  {
    id: 2,
    title: "hej",
    done: true
  }
]
 */
let nextId = 3; // should I save this to useState and localStorage? Probably not needed?

function App() {

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    const initialValue = JSON.parse(saved);
    return initialValue || [];

  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function clearStorage() {
   /*  localStorage.clear(); // clear everything!!
    
   /*  localStorage.removeItem('todos'); */
    setTodos([]); // only need this since the useEffect (above this function) runs again when todos changes!
  } 

  function handleAddTodo(title) {

      setTodos([...todos, {
          id: nextId++,   
          title: title,
          done: false
        }
      ])
  }


  function handleDone(clickedTodo) {

    const updatedTodos = todos.map( todo => {
      if (todo.id === clickedTodo.id) {
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo; // return the other todos as normal
    })

    setTodos(updatedTodos)
  }

  function handleDelete(clickedTodo) {
   
    const filteredTodos = todos.filter( (todo) => {
      return todo.id != clickedTodo.id;
    })

    setTodos(filteredTodos)
  }

  return (
    <>
    <div>
      <div>
        <AddTodo onClick={handleAddTodo}/>
      </div>
     
      <div>
        <TodoItems todos={todos} onClickDone={handleDone} onClickDelete={handleDelete}/>
      </div>

      <button onClick={() => clearStorage()}>
          Clear Storage
      </button>

    </div>

    </>
  )
}

export default App
