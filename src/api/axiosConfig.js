import axios from "axios";

export default axios.create({
    //baseURL: 'http://localhost:8080',
    baseURL: 'https://localhost:44373',
    headers: {"skip-browser-warning": "true"}
}); 