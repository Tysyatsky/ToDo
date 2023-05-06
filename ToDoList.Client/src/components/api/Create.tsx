import api from './todos'

const Create = async (name: string, desc: string) => {
    let id = 
    api.post('/Create', {
        name: name,
        description: desc,
        state: 0
    })
    .then((responce) => {
        return responce.data.id
    }).then()
    return id as unknown as number;
}

export default Create;