// composables/useAxios.ts
import axios from 'axios';

const useAxios = () => {
  const instance = axios.create({
    baseURL: 'http://blog.test', 
    withCredentials: true, 
  });

  instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

  return instance;
};

export default useAxios;
