//import React, { useRef } from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddForm from './AddForm';
import './styles.css'


interface Props {
    todo: string | undefined;
    description: string | undefined;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    setDesc: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, description, setTodo, setDesc, handleAdd}: Props) => {

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  }
  const handleClose = () => {
    setShow(false);
  }

  return (
    
    <div>
      <button className='input_submit' onClick={handleShow}>+</button>
      <Modal show={show}>
    <Modal.Header>
      <Modal.Title>Add ToDo</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <AddForm todo={todo} description={description} setDesc = {setDesc} setTodo={setTodo} handleAdd={handleAdd}/>
    </Modal.Body>
    <Modal.Footer>
      <Button variant='secondary' onClick={handleClose}>Close button</Button>
    </Modal.Footer>
  </Modal>
    </div>
  )
}

export default InputField;
