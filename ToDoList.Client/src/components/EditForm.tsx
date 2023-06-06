
interface Props {
    todoId: string, 
    name: string | undefined;
    description: string | undefined;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    setDesc: React.Dispatch<React.SetStateAction<string>>;
    handleEdit: (e: React.FormEvent, id: string) => void;
}

const EditForm = ({todoId, name, setTodo, description, setDesc, handleEdit} : Props) => {
    return(
        <form onSubmit={(e) => handleEdit(e, todoId)}>
          <label>
            <input type='text' 
            placeholder='Title *'
            value={name} 
            name='todo'
            onChange = {
              (e) => setTodo(e.target.value)
            } 
            required>
            </input>
          </label>
          <label>
            <input type='text' 
            placeholder='Description *'
            value={description} 
            name='todo'
            onChange = {
              (e) => setDesc(e.target.value)
            } 
            required>
            </input>
          </label>
          <button type='submit'>
            Edit
          </button>
        </form>
    )
}

export default EditForm;