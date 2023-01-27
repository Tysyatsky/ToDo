import api from './todos'

const Delete = async (id: number) => {
    api.delete('Delete/' + id.toString()).then(responce => console.log(responce)).catch();
}

export default Delete;