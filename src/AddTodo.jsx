import { useState } from 'react'

export default function AddTodo(props) {
  const [title, setTitle] = useState(''); // this will be added to the todos array in App.jsx

  const { onClick } = props;

  return (
    <div>
      {/* spara title i input's value så vi kan använda e.target.value sen*/}
      <input placeholder="Add Todo" type="text" value={title} onChange={e => setTitle(e.target.value)}/>

      <button onClick={() => {
        setTitle(''); // nollställ
        onClick(title);}}>Add</button>
    </div>
    
  )
}