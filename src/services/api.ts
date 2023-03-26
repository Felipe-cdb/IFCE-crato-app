import axios from 'axios';

const api = axios.create({
    baseURL: "http://192.168.2.16:3000",
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDM2NDBkNGU5NTg0M2YxZTg2NzhlMyIsImlhdCI6MTY3OTg1MDY3MCwiZXhwIjoxNjc5OTM3MDcwfQ.vx-tgzOFB97JlNhsl0XwBr2WCdWaJHFD8FbrgseeH5Q'
    }
})

export default api;