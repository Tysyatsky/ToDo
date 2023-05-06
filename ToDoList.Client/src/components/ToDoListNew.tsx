import React, { useEffect } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { ToDo } from '../model'
import SingleTodo from './SingleTodo';
import './styles.css'
import GetAll from './api/GetAll';

interface Props{
    todos: ToDo[];
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoListNew = ({todos, setTodos}: Props) => {
    return (
        <div></div>
    )
}

export default ToDoListNew;