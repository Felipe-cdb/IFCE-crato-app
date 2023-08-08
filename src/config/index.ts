import axios from 'axios';
import { URL_API } from '@env';

const BASE_URL = URL_API;

export const api: any = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json', 
    'Accept': 'application/json',
  }
});