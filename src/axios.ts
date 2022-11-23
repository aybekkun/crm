import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

const $host = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

$authHost.interceptors.request.use((config: AxiosRequestConfig) => {
  (config.headers as AxiosRequestHeaders).authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});



export { $host, $authHost };