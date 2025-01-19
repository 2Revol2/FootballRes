import axios from "axios";
import { Bounce, toast } from "react-toastify";
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
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      if (error.code === "ERR_NETWORK") {
        toast.error("CORS Error", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    }
  );
  return instance;
}
export const baseInstance = createInstance();
