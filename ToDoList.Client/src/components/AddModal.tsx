import { useState } from 'react';
import AddForm from './AddForm';
import './styles.css'


interface Props {
    todo: string | undefined;
    description: string | undefined;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    setDesc: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputForm: React.FC<Props> = ({todo, description, setTodo, setDesc, handleAdd}: Props) => {

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
      {
        show &&
        (
          <div className='popup'>
          <div className='popup-inner'>
            <h1>Add new Todo</h1>
            <AddForm todo={todo} description={description} setDesc = {setDesc} setTodo={setTodo} handleAdd={handleAdd}/>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
        )
      }
  </div>
  )
}

export default InputForm;
