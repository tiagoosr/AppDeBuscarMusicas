import axios from 'axios';

const url = 'https://itunes.apple.com/search?term=';
const limite ='&limit=50';
const getMusicas = (nome) => {
    return axios.get(url+nome+limite);
}

export default {
    getMusicas,
}