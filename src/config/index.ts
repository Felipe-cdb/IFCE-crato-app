import axios from 'axios';
import { URL_API } from '@env';

export const api: any = axios.create({
  baseURL: URL_API,
  headers: {
    'Content-Type': 'application/json', 
    'Accept': 'application/json',
  }
});