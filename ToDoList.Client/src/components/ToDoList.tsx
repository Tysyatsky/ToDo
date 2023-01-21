import React from 'react'
import { ToDo } from '../model'
import SingleTodo from './SingleTodo';
import './styles.css'

interface Props{
    todos: ToDo[];
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = (todos, setToDos) => {
  return (
    <div className='todos'>
      {
        todos.todos.map(todo => (
          <SingleTodo
          todo = {todo}
          key = {todo.id}
          todos = {todos.todos}
          setTodos = {setToDos}
        />
        ))
      }
    </div>
  )
}

export default ToDoList
