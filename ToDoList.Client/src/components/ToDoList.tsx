import React, { useEffect } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { ToDo } from '../model'
import SingleTodo from './SingleTodo';
import './styles.css'
import GetAll from './api/GetAll';


interface Props{
    todos: ToDo[];
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
    inProgressTodos: ToDo[];
    setInProgressTodos:  React.Dispatch<React.SetStateAction<ToDo[]>>;
    doneTodos: ToDo[];
    setDoneTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({todos, setTodos, inProgressTodos, setInProgressTodos, doneTodos, setDoneTodos} : Props) => {
  
  useEffect (() => {
    GetAll({setTodos, setInProgressTodos, setDoneTodos});
  }, [setDoneTodos, setInProgressTodos, setTodos]);
  
  return (
    <div className="container">
      <Droppable droppableId='newTodos'>
        {
          (provided) => (
            <div 
              className="todos" 
              ref={provided.innerRef} 
              {...provided.droppableProps}
            >
            <span className="todos__heading">
              Active tasks
            </span>
            {
            todos.map((todo, index) => (
              <SingleTodo
              index={index}
              todo = {todo}
              key = {todo.id}
              todos = {todos}
              setTodos = {setTodos}
            />
            ))}
          {provided.placeholder}
          </div>
          )}
      </Droppable>
      
      <Droppable droppableId='inProgressTodos'>{
        (provided) => (
        <div 
          className='todos inProgress'  
          ref={provided.innerRef} 
          {...provided.droppableProps}
        >
        <span className="todos__heading">Task in progress</span>
        {
          inProgressTodos.map((todo, index) => (
            <SingleTodo
            index={index}
            todo = {todo}
            key = {todo.id}
            todos = {inProgressTodos}
            setTodos = {setInProgressTodos}
          />
          ))}
        {provided.placeholder}
        </div>
        )}
      </Droppable>
      <Droppable droppableId='doneTodos'>
      {
        (provided) => (
        <div 
          className="todos done"  
          ref={provided.innerRef} 
          {...provided.droppableProps}
        >
        <span className="todos__heading">Done</span>
        {
          doneTodos.map((todo, index) => (
            <SingleTodo
            index={index}
            todo = {todo}
            key = {todo.id}
            todos = {doneTodos}
            setTodos = {setDoneTodos}
          />
          ))}
          {provided.placeholder}
        </div>
        )}
      </Droppable>
      
    </div>
  )
}

export default ToDoList
