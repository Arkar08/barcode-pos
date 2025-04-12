import axios from "axios";

const Axios = axios.create()


Axios.defaults.baseURL = 'http://localhost:8000/api/v1'

Axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );


export default Axios;