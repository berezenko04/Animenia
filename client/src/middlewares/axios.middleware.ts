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
    const isAuthEndpoint =
      originalRequest.url?.includes("/auth/login") || originalRequest.url?.includes("/auth/register");

    if (
      error.response?.status === 401 &&
      !originalRequest._isRetry &&
      !originalRequest.url.includes("/auth/refresh") &&
      !isAuthEndpoint
    ) {
      originalRequest._isRetry = true;
      try {
        await AuthService.refresh();
        return instance.request(originalRequest);
      } catch (err) {
        console.error("Refresh failed", err);
        AuthService.logout();
        return Promise.reject(err);
      }
    }
    if (originalRequest.url.includes("/auth/refresh")) {
      AuthService.logout();
    }

    throw error;
  }
);
