import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo, updateTodo}){

    return(  <ul className="list">
    {todos.length === 0 && 'No todos'}
    {todos.map(todo => {
      return  <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    })}
   

  </ul>)
}

// " id={todo.id} completed={todo.completed} title={todo.title} " = "{...todo}"