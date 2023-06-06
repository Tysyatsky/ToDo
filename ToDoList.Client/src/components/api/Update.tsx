import { ToDo } from '../../model';
import Get from './Get';
import api from './todos'

const Update = async (id: string, order: string, name: string, desc: string, state: number, change: boolean) => {
    const todo: ToDo = await Get(id);
    let newState = todo.state;
    if (change) {
        newState = state;
    }
    api.put('/Update/' + id, {
        id: id,
        orderId: order,
        name: name,
        description: desc,
        state: newState
    }).then(responce => console.log(responce.data)).catch(e => console.log(e));
}

export default Update;