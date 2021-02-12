import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://voice-assistant-app-5b073-default-rtdb.firebaseio.com/'
});

export default instance;