import axios, { AxiosInstance, AxiosError } from 'axios';

export const BASE_URL: string = '';

export const API: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
