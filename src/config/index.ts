import axios from 'axios';
import { URL_API } from '@env';

export const api: any = axios.create({
  baseURL: URL_API || 'https://api-aluno-ifce-crato.fly.dev/',
  headers: {
    'Content-Type': 'application/json', 
    'Accept': 'application/json',
  }
});