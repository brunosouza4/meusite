import axios from 'axios';

const api = axios.create({

    baseURL: 'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider'

});

export default api;