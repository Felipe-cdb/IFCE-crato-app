import axios from 'axios';

export const api: any = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json', 
    'Accept': 'application/json',
  }
});