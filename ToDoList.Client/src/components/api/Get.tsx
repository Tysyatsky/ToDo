import api from './todos'

const Get = (id: number) => {
    api.get('/Get/+' + id.toString() + '?id=' + id.toString());
}

export default Get;