import axios, { AxiosInstance, AxiosError } from 'axios';
import type { DetailMessageType } from '../types';

const axiosInstance: AxiosInstance = axios.create();
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<DetailMessageType>) => {
    throw error.message;
  }
);

export default axiosInstance;