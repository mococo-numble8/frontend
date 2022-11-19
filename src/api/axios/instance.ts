import axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from './constants';

const baseConfig: AxiosRequestConfig = { baseURL: API_URL };
export const axiosInstance = axios.create(baseConfig);

const testConfig: AxiosRequestConfig = {
  baseURL: 'https://reqres.in/api',
};
export const testInstance = axios.create(testConfig);
