import axios from "axios";
import { store } from "./store";

export const privateApi = axios.create({
  baseURL: "http://localhost:3001",
});

privateApi.interceptors.request.use(
  (config) => {
    // Беремо поточний стан Redux безпосередньо перед запитом
    const state = store.getState();
    const token = state.user?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
