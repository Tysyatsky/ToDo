import React from 'react'
import { ToDo } from '../model'


interface Props {
  todo: ToDo,
  todos: ToDo[],
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>
}


const SingleTodo = ({todo, todos, setTodos}: Props) => {
  return (
    <form className='todo__single'> 
      <p className='todo__single--text'> Title: {todo.todo}</p>
      <p className='todo__single--text'> Description: {todo.description}</p>
      <div>

      </div>
    </form>
  )
}

export default SingleTodo
