import axios from "axios";

// api
import AuthService from "@/api/auth/auth.service";

export const instance = axios.create({
  baseURL: `${import.meta.env.DEV ? "http://localhost:3000" : ""}/api/v1`,
  withCredentials: true,
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = { ...error.config };

    if (error.response?.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
        await AuthService.refresh();
        return instance.request(originalRequest);
      } catch (err) {
        console.error("Auth refresh error", err);
        throw err;
      }
    }

    throw error;
  }
);
