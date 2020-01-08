import axios from 'axios';

const initial = axios.create({
    baseURL: 'http://localhost:8000'
});

export default initial
