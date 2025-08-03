// frontend/api.js

import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Or whatever your backend base URL is
});

export default API;
