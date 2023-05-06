import React, { useState } from 'react'
import { ToDo } from '../model'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import DeletePopup from './DeletePopup'
import { Draggable } from 'react-beautiful-dnd'
import Delete from './api/Delete'
import Update from './api/Update';
import EditModal from './EditModal'

interface Props {
  index: number,
  todo: ToDo,
  todos: ToDo[],
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const SingleTodo = ({index, todo, todos, setTodos}: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.name);
  const [editDesc, setEditDesc] = useState<string>(todo.description);
  const [remove, setRemove] = useState<boolean>(false);

  const handleDone = (id:number) => {
    setTodos(todos.map(
      (todo) => todo.id === id ? {...todo, state: todo.state = 2} : todo
      ) 
    )
  }

  const handleDelete = async (id:number) => {
    await Delete(id);
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEdit = async (e: React.FormEvent, id:number) => {
    e.preventDefault();
    await Update(id, editTodo, editDesc, 0);
    setTodos(
      todos.map((todo) => todo.id === id ? {...todo, name: editTodo, description: editDesc} : todo)
    );
    setEdit(false);
  }

  const handleShow = () => {
    setEdit(true);
  }

  return (
    <div>
      <Draggable draggableId={todo.id.toString()} index = {index}>
      {
        (provided) => (
        <form 
          className='todo__single'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        > 
        {
            todo.state === 2 ? (
            <div>
              <s className='todo__single--text'>{todo.name}</s>
              <div className='icon'>            
              <span className='icon__single' onClick={async () => await handleDelete(todo.id)}>
              <AiFillDelete/>
            </span>
            </div>
            </div>
          ) : (
            <div>
              <h2 className='todo__single--text'>{todo.name}</h2>
              <h4 className='todo__single--text'>{todo.description}</h4>
              <div className='icon'>
              <span className='icon__single' onClick={ () =>{
                if(!edit && !(todo.state === 2)){
                  handleShow();
                }
              }}
              >
                <AiFillEdit/>
              </span>
              <span className='icon__single' onClick={() => setRemove(true)}>
                <AiFillDelete/>
              </span>
              <span className='icon__single' onClick={() => handleDone(todo.id)}>
                <MdDone/>
              </span>
            </div>
          </div>
          )
          
        }
        
        </form>)
      }
    </Draggable>
    <EditModal todoId = {todo.id} name = {editTodo} description={editDesc} edit = {edit} setTodo={setEditTodo} setDesc = {setEditDesc} setEdit = {setEdit} handleEdit = {handleEdit}></EditModal>
    <DeletePopup todoId={todo.id} trigger={remove} setTrigger={setRemove} handleDelete={handleDelete}></DeletePopup>
    </div>
  )
}

export default SingleTodo
