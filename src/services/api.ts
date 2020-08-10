import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.13:3333' /*colocar o endereço que estiver no expo do celular */
})

export default api;