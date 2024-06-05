import axios from 'axios';

export function useAxios() {
  const api = axios.create({
    baseURL: 'http://localhost:8087',
    withCredentials: true
  });

  return api;
}
