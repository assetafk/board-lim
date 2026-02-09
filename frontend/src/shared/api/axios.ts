import axios from 'axios';
import {storage} from '../../lib/storage/storage';

export const api = axios.create({
    baseURL: 'http://localhost8000/api',
})

api.interceptors.request.use((config)=>{
    const token = storage.getToken();
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})