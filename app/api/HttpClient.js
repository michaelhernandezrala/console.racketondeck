import axios from 'axios';

const HttpClient = axios.create({ baseURL: 'http://localhost:3607' });

HttpClient.interceptors.response.use((response) => response.data);

export default HttpClient;
