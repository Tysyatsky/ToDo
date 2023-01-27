import api from './todos'

const Update = async (id:number, name:string , desc: string, state: number) => {
    api.put('/Update/' + id.toString(), {
        id:id,
        name: name,
        description: desc,
        state: state 
    }).then(responce => console.log(responce.data))
}

export default Update;