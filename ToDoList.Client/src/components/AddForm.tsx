interface Props {
  todo: string | undefined;
  description: string | undefined;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  setDesc: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const AddForm = ({todo, description, setTodo, setDesc, handleAdd}: Props) => {
    return (
        <form onSubmit={(e) => handleAdd(e)}>
          <label>
            <input type='text' 
            placeholder='Title *'
            value={todo} 
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
            Add new Todo
          </button>
        </form>
      );
}

export default AddForm;