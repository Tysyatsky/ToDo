import React from 'react'
import { ToDo } from '../model'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'

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
        <span className='icon'>
          <AiFillEdit/>
        </span>
        <span className='icon'>
          <AiFillDelete/>
        </span>
        <span className='icon'>
          <MdDone/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
