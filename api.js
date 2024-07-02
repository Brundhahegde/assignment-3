// client/src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000', // Ensure this matches your server's address
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
