import axios from 'axios';

export const api: any = axios.create({
  baseURL: 'https://api-aluno-ifce-crato-production.up.railway.app/',
  headers: {
    'Content-Type': 'application/json', 
    'Accept': 'application/json',
  }
});