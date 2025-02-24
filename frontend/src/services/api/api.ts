import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const generateViewLink = (userId: string) => {
    return `${window.location.origin}/view/${userId}`;
  };