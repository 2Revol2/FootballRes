import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

function createInstance() {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "X-Auth-Token": API_KEY,
    },
  });
  instance.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
}
export const baseInstance = createInstance();