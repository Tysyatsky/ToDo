import EditForm from "./EditForm";

interface Props{
    todoId: string, 
    name: string | undefined;
    description: string | undefined;
    edit: boolean;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    setDesc: React.Dispatch<React.SetStateAction<string>>;
    setEdit: React.Dispatch<React.SetStateAction<boolean>>;
    handleEdit: (e: React.FormEvent, id: string) => void;
}

const EditModal = ({todoId, name, description, edit, setTodo, setDesc, setEdit,handleEdit} : Props) =>{

    const handleClose = () => {
        setEdit(false);
    }
return edit ? ( 
  <div className='popup'>
    <div className='popup-inner'>
      <h1>Edit</h1>
      <EditForm todoId={todoId} name = {name} setTodo = {setTodo} description = {description} setDesc = {setDesc} handleEdit={handleEdit}/>
      <button onClick={handleClose}>Close</button>
    </div>
  </div>
) : <div />
}

export default EditModal;