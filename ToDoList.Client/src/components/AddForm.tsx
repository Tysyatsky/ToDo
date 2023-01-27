import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

interface Props {
  todo: string | undefined;
  description: string | undefined;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  setDesc: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const AddForm = ({todo, description, setTodo, setDesc, handleAdd}: Props) => {
    return (
        <Form onSubmit={(e) => handleAdd(e)}>
          <Form.Group>
            <Form.Control type='text' 
            placeholder='Title *'
            value={todo} 
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
            Add new Todo
          </Button>
        </Form>
      );
}

export default AddForm;