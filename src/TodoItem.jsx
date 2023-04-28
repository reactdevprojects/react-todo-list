export function TodoItem({completed, id, title, toggleTodo, deleteTodo,updateTodo}){
    return(
        <li>
      <label>
        <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
        {title}
      </label>
      <button className="btn btn-danger" onClick={()=>deleteTodo(id)}>Delete</button>
      <button className="btn btn-danger" onClick={()=>updateTodo(id, 'hi')}>Update</button>
    </li>
    )
}