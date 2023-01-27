import { ToDo } from '../../model';
import api from './todos';

interface Props{
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
    setInProgressTodos:  React.Dispatch<React.SetStateAction<ToDo[]>>;
    setDoneTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const GetAll = async ({setTodos, setInProgressTodos, setDoneTodos} : Props) => {
    try {
      const responce = await api.get('/GetAll');
      console.log(responce);
      setTodos(responce.data.filter((todo: ToDo) => todo.state === 0));
      setInProgressTodos(responce.data.filter((todo: ToDo) => todo.state === 1));
      setDoneTodos(responce.data.filter((todo: ToDo) => todo.state === 2));
    } catch (err) {
      console.log(err);
    }
}

export default GetAll;