import api from './todos'


const genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');


const Create = async (id: string, name: string, order: string, desc: string) => {
    const newID = genRanHex(24);
    api.post('/Create', {
        id: newID,
        orderId: order,
        name: name,
        description: desc,
        state: 0
    })
        .then((responce) => {
            console.log(responce.data.id);
        }).catch((e) => console.log(e));
    return newID;
}

export default Create;