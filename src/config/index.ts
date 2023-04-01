import axios from 'axios';

export const api: any = axios.create({
  baseURL: 'http://alunoifcecratoapi-env.eba-cgx6xwzd.us-east-1.elasticbeanstalk.com/',
  headers: {
    'Content-Type': 'application/json', 
    'Accept': 'application/json',
  }
});