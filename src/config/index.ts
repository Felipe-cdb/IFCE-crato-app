import axios from 'axios';
import env from '../EnvironmentVariables';

export const api: any = axios.create({
  baseURL: env.URL_API,
  headers: {
    'Content-Type': 'application/json', 
    'Accept': 'application/json',
  }
});