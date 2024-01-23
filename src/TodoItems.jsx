export default function TodoItems(props) {

  const { todos, onClickDone, onClickDelete } = props;
  
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <b>{todo.title}</b> {/* // <b></b> same line  */}
            {todo.done ? <button className="done" onClick={() => {
                onClickDone(todo)}}>Done</button> : <button className="notDone" onClick={() => {
                  onClickDone(todo)}}>Done</button> }

            <button onClick={() => {
              onClickDelete(todo)
            }}>Delete</button>
          </li>
          
        ))}
      </ul>
    </div>
  );


}



/* 
function TodoItem (todo) {

  return (
    
    todo.title
  )

} */