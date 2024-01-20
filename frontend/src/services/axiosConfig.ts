import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://212.233.99.182:4000/api/'
})