import { Button, Form } from "react-bootstrap";


interface Props {
    todoId: number, 
    name: string | undefined;
    description: string | undefined;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    setDesc: React.Dispatch<React.SetStateAction<string>>;
    handleEdit: (e: React.FormEvent, id:number) => void;
}

const EditForm = ({todoId, name, setTodo, description, setDesc, handleEdit} : Props) => {
    return(
        <Form onSubmit={(e) => handleEdit(e, todoId)}>
          <Form.Group>
            <Form.Control type='text' 
            placeholder='Title *'
            value={name} 
            name='todo'
            onChange = {
              (e) => setTodo(e.target.value)
            } 
            required>

            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control type='text' 
            placeholder='Description *'
            value={description} 
            name='todo'
            onChange = {
              (e) => setDesc(e.target.value)
            } 
            required>

            </Form.Control>
          </Form.Group>
          <Button variant='success' type='submit'>
            Edit
          </Button>
        </Form>
    )
}

export default EditForm;