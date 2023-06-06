import api from './todos'

const Get = (id: string) => {
    return api.get('/Get/' + id).then((r) => r.data).catch(e => console.log(e));
}

export default Get;