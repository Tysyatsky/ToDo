import React from 'react'
import './Popup.css'

interface Props{
    todoId: number;
    trigger: boolean;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
    handleDelete: (id:number) => void;
  }

const DeletePopup = (props: Props) => {
  return props.trigger ? ( 
    <div className='popup'>
      <div className='popup-inner'>
        <h1>Delete</h1>
        <p>Are you sure you want to delete?</p>
        <button className='delete-btn' onClick={() => {props.setTrigger(false); props.handleDelete(props.todoId)}}>Delete</button>
        <button className='cancel-btn' onClick={() => {props.setTrigger(false)}}>Cancel</button>
      </div>
    </div>
  ) : <div></div>
}

export default DeletePopup
